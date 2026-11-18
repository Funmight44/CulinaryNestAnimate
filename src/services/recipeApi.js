
const API_BASE_URL = 'https://forkify-api.jonas.io/api/v2/recipes'

async function fetchJson(url, { signal } = {}) {
  const response = await fetch(url, { signal })
  const payload = await response.json()

  if (!response.ok || payload.status === 'fail') {
    throw new Error(
      payload.message || 'We could not load recipes. Please try again.'
    )
  }

  return payload.data
}

export async function searchRecipes(query, { signal } = {}) {
  const params = new URLSearchParams({ search: query })

  const data = await fetchJson(`${API_BASE_URL}?${params}`, { signal })

  return data.recipes || []
}

export async function getRecipe(id, { signal } = {}) {
  const data = await fetchJson(
    `${API_BASE_URL}/${encodeURIComponent(id)}`,
    { signal }
  )

  return data.recipe
}
