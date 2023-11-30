import { Hero } from "../types/hero"

export const searchHeroes = (query: string, signal?: AbortSignal) => {
  return fetch(`http://localhost:4000/heroes?name_like=${query}`, { signal })
    .then((response) => response.json())
    .then((data: Hero[]) => {
      return data
    })
    .catch((e) => {
      console.error(e)
    })
}

export const searchHeroesByFirstLetter = (query: string, signal?: AbortSignal) => {
  return fetch(`http://localhost:4000/heroes?name_like=^${query}`, { signal })
    .then((response) => response.json())
    .then((data: Hero[]) => {
      return data
    })
    .catch((e) => {
      console.error(e)
    })
}
