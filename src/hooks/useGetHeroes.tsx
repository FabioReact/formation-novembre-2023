import { useEffect, useState } from 'react'
import { Hero } from '../types/hero'

export const useGetHeroes = (selectedLetter: string) => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Ici, je peux executer des fonctions contenant des effets de bord
    setLoading(true)
    setError(false)
    setHeroes([])
    const controller = new AbortController()
    const signal = controller.signal
    fetch(`http://localhost:4000/heroes?name_like=^${selectedLetter}`, {
      signal, // signal: signal
    })
      .then((response) => response.json())
      .then((data) => {
        if (Math.random() > 0.5) {
          throw new Error('Random error')
        }
        setHeroes(data)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setError(true)
        setLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [selectedLetter])

  return {
    heroes,
    loading,
    error,
  }
}
