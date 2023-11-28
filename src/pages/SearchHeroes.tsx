import { useRef, useState } from 'react'
import { Hero } from '../types/hero'
import HeroesList from '../components/HeroesList'
import { searchHeroes } from '../api/heroes'

const SearchHeroes = () => {
  // 1. Remplacer useState (etat controllé) par useRef (etat non controllé)
  // Lors du click du bouton "Search", afficher la liste des heroes correspondant à la recherche
  const queryRef = useRef<HTMLInputElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSearchHandler = async () => {
    const query = queryRef.current?.value || ''
    // Factoriser nos differents appels API
    // setLoading -> true
    try {
      const data = await searchHeroes(query)
      if (data) {
        setHeroes(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      // setLoading -> false
    }
  }

  return (
    <section>
      <h1>Search Heroes</h1>
      <button onClick={onSearchHandler}>Search</button>
      <input type='text' ref={queryRef} />
      <HeroesList heroes={heroes} />
    </section>
  )
}

export default SearchHeroes
