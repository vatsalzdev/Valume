interface ContactPayload {
  projectType?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  hp_field?: string;
}

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Utility to write JSON response compatible with both Vercel and Node http.ServerResponse
function sendJson(res: any, status: number, data: { success: boolean; error?: string }) {
  if (typeof res.status === 'function') {
    return res.status(status).json(data);
  }
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// Utility to parse request body across Vercel (pre-parsed) and raw Node IncomingMessage stream
async function parseBody(req: any): Promise<ContactPayload | null> {
  if (req.body && typeof req.body === 'object') {
    return req.body as ContactPayload;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk;
      // DoS guard: reject payloads over 50KB
      if (body.length > 50000) {
        req.destroy();
        resolve(null);
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : null);
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}

// Send internal Telegram notification
async function sendTelegramLeadNotification(
  botToken: string,
  chatId: string,
  lead: {
    name: string;
    projectType: string;
    email: string;
    phone: string;
    source: string;
    message: string;
    timestamp: string;
  }
): Promise<void> {
  // Validate that chatId is not a raw phone number (Telegram Bot API requires numerical chat_id)
  if (chatId.startsWith('+') || !/^-?\d+$/.test(chatId)) {
    throw new Error(
      `Invalid TELEGRAM_CHAT_ID ("${chatId}"). Telegram Bot API requires a numeric Chat ID, not a phone number.`
    );
  }

  const messageText = [
    '🚨 NEW VALUME PROJECT',
    '',
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || 'Not provided'}`,
    '',
    'Project:',
    lead.projectType,
    '',
    'Source:',
    lead.source,
    '',
    'Message:',
    lead.message,
    '',
    'Time:',
    lead.timestamp,
  ].join('\n');

  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Telegram sendMessage failed with HTTP ${res.status}: ${errText}`);
  }
}

export default async function handler(req: any, res: any) {
  // 1. Only POST requests allowed
  if (req.method !== 'POST') {
    return sendJson(res, 405, {
      success: false,
      error: 'Method Not Allowed. Expected POST.',
    });
  }

  // 2. Parse request body
  const body = await parseBody(req);
  if (!body) {
    return sendJson(res, 400, {
      success: false,
      error: 'Invalid or missing JSON payload.',
    });
  }

  // 3. Spam Honeypot Protection
  // If honeypot hidden field is filled, silently discard bot request
  if (body.hp_field && body.hp_field.trim().length > 0) {
    console.warn('[Valume Intake] Spam bot submission trapped via honeypot field.');
    return sendJson(res, 200, { success: true });
  }

  // 4. Server-Side Input Validation
  const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : '';
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const source = typeof body.source === 'string' && body.source.trim() ? body.source.trim() : 'Website';

  if (!projectType || projectType.length < 2 || projectType.length > 100) {
    return sendJson(res, 400, {
      success: false,
      error: 'Please select a valid Project Type.',
    });
  }

  if (!name || name.length < 2 || name.length > 100) {
    return sendJson(res, 400, {
      success: false,
      error: 'Please provide your name (2–100 characters).',
    });
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 150) {
    return sendJson(res, 400, {
      success: false,
      error: 'Please provide a valid work email address.',
    });
  }

  if (phone && phone.length > 50) {
    return sendJson(res, 400, {
      success: false,
      error: 'Phone number exceeds maximum length.',
    });
  }

  if (!message || message.length < 5 || message.length > 3000) {
    return sendJson(res, 400, {
      success: false,
      error: 'Please tell us what you are trying to build or fix (5–3000 characters).',
    });
  }

  // 5. Check Telegram credentials
  const tgBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;

  if (!tgBotToken || !tgChatId) {
    console.error('[Valume Lead Intake] Telegram configuration missing on server.', {
      hasBotToken: Boolean(tgBotToken),
      hasChatId: Boolean(tgChatId),
    });
    return sendJson(res, 503, {
      success: false,
      error: 'Lead intake notification service is currently unconfigured. Please email us directly at valume.studios@gmail.com.',
    });
  }

  // 6. Dispatch Telegram Internal Notification
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  try {
    await sendTelegramLeadNotification(tgBotToken, tgChatId, {
      name,
      projectType,
      email,
      phone,
      source,
      message,
      timestamp,
    });
    console.info('[Valume Lead Intake] Telegram notification delivered successfully.', {
      name,
      projectType,
      source,
    });
  } catch (tgErr: any) {
    console.error('[Valume Lead Intake] Telegram notification failed to send:', tgErr?.message || tgErr);
    return sendJson(res, 502, {
      success: false,
      error: 'Something went wrong while submitting the brief. Please try again.',
    });
  }

  // 7. Return Success to client
  return sendJson(res, 200, { success: true });
}
