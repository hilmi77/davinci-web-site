import { useQuery } from '@tanstack/react-query'

const API_URL = import.meta.env.VITE_API_URL ?? ''

async function fetchLatestMonthlyActivity(): Promise<string | null> {
  const res = await fetch(`${API_URL}/monthly-activity/latest`)
  if (!res.ok) throw new Error('Failed to fetch monthly activity')
  const data = await res.json()
  return data?.imageUrl ?? null
}

export function useLatestMonthlyActivity() {
  return useQuery({
    queryKey: ['monthlyActivity', 'latest'],
    queryFn: fetchLatestMonthlyActivity,
  })
}
