import { useEffect, useState } from 'react'
import { Hero } from '../types/hero'
import Loading from '../components/Loading'
import HeroesList from '../components/HeroesList'

const arrayOfLetters: string[] = []
for (let i = 97; i <= 122; i++) {
  arrayOfLetters.push(String.fromCharCode(i))
}
// const letters: Array<string> = []

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('a')
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ici, je peux executer des fonctions contenant des effets de bord
    setLoading(true)
    setHeroes([])
    const controller = new AbortController()
    const signal = controller.signal
    fetch(`http://localhost:4000/heroes?name_like=^${selectedLetter}`, {
      signal, // signal: signal
    })
      .then((response) => response.json())
      .then((data) => {
        setHeroes(data)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
      })
    return () => {
      controller.abort()
    }
  }, [selectedLetter])

  return (
    <section>
      <h1>Heroes List</h1>
      <ul className='flex justify-center gap-2 uppercase font-semibold text-xl my-4'>
        {arrayOfLetters.map((letter) => (
          <li
            key={letter}
            className={letter === selectedLetter ? 'text-red-600 cursor-pointer' : 'cursor-pointer'}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <Loading isLoading={loading}>
        <HeroesList heroes={heroes} />
      </Loading>
    </section>
  )
}

export default Heroes
