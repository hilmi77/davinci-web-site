const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchLatestMonthlyActivity(): Promise<string | null> {
  try {
    const res = await fetch(`${API_URL}/monthly-activity/latest`)
    if (!res.ok) return null
    const data = await res.json()
    return data?.imageUrl ?? null
  } catch {
    return null
  }
}
