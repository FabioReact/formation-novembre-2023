import { useState } from 'react'
import Loading from '../components/Loading'
import HeroesList from '../components/HeroesList'
import { useGetHeroes } from '../hooks/useGetHeroes'

// Créer un custom hook, useCounter, il va afficher dans la console, toute les secondes, un compteur incrementer de 1, on doit pouvoir freeze le compteur, ou le reinitialisé

const arrayOfLetters: string[] = []
for (let i = 97; i <= 122; i++) {
  arrayOfLetters.push(String.fromCharCode(i))
}
// const letters: Array<string> = []

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('a')

  const { heroes, loading, error } = useGetHeroes(selectedLetter)

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
      {error && <p>Sorry, looks like our API has been smashed!</p>}
    </section>
  )
}

export default Heroes
