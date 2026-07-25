const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '')

export async function fetchPosts() {
  if (!apiBaseUrl) return null

  const response = await fetch(`${apiBaseUrl}/api/posts`)
  if (!response.ok) throw new Error('文章接口请求失败')
  return response.json()
}

