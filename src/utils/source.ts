/**
 * Traffic source detector for Valume intake.
 * Inspects URL parameters (?source=...) and returns a clean, capitalized source string.
 */
export function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'Website'

  try {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('source')?.trim()
    if (!raw) return 'Website'

    const lower = raw.toLowerCase()
    if (lower === 'instagram') return 'Instagram'
    if (lower === 'linkedin') return 'LinkedIn'
    if (lower === 'outreach') return 'Outreach'
    if (lower === 'twitter' || lower === 'x') return 'Twitter'

    // Capitalize custom source identifiers cleanly
    return raw.charAt(0).toUpperCase() + raw.slice(1)
  } catch {
    return 'Website'
  }
}
