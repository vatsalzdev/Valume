/**
 * Valume Studio — Contact & Project Briefing Service
 * Posts directly to /api/contact endpoint.
 */

export interface ProjectBrief {
  projectType: string
  name: string
  email: string
  phone?: string
  message: string
  source?: string
  hp_field?: string
}

export interface SubmissionResult {
  success: boolean
  error?: string
}

/**
 * Submits a project briefing to the /api/contact server endpoint.
 */
export async function submitBrief(brief: ProjectBrief): Promise<SubmissionResult> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(brief),
  })

  let data: any
  try {
    data = await response.json()
  } catch {
    throw new Error('Something went wrong while submitting the brief. Please try again.')
  }

  if (!response.ok || !data?.success) {
    const errorMsg = data?.error || 'Something went wrong while submitting the brief. Please try again.'
    throw new Error(errorMsg)
  }

  return {
    success: true,
  }
}
