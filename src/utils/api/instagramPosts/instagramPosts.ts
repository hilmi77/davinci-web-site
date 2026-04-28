import { useQuery } from '@tanstack/react-query'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export type InstagramPost = {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | string
  media_url?: string | null
  thumbnail_url?: string | null
  permalink: string
  caption?: string | null
  timestamp?: string
  username?: string
}

type InstagramPostsResponse = {
  data?: InstagramPost[]
}

function normalizePosts(payload: InstagramPostsResponse | InstagramPost[]): InstagramPost[] {
  const posts = Array.isArray(payload) ? payload : payload?.data ?? []
  return posts.filter((post) => Boolean(post?.id && post?.permalink))
}

async function fetchInstagramPosts(limit = 8): Promise<InstagramPost[]> {
  if (!API_URL) {
    throw new Error('VITE_API_URL is not configured')
  }

  const query = new URLSearchParams({ limit: String(limit) })
  const res = await fetch(`${API_URL}/instagram/posts?${query.toString()}`)
  if (!res.ok) {
    throw new Error('Failed to fetch Instagram posts')
  }

  const payload: InstagramPostsResponse | InstagramPost[] = await res.json()
  return normalizePosts(payload)
}

export function useInstagramPosts(limit = 8) {
  return useQuery({
    queryKey: ['instagramPosts', 'list', limit],
    queryFn: () => fetchInstagramPosts(limit),
  })
}
