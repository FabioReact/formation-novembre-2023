import { useState } from 'react'
import Loading from '../components/Loading'
import HeroesList from '../components/HeroesList'
import { useQuery } from '@tanstack/react-query'
import { searchHeroesByFirstLetter } from '../api/heroes'

const arrayOfLetters: string[] = []
for (let i = 97; i <= 122; i++) {
  arrayOfLetters.push(String.fromCharCode(i))
}

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('a')

  const {
    data: heroes,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['heroes', selectedLetter],
    queryFn: () => searchHeroesByFirstLetter(selectedLetter),
  })

  // A -> isLoading = true, isFetching = true
  // M -> isLoading = true, isFetching = true
  // A -> isLoading = false, isFetching = true

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
      <Loading isLoading={isFetching}>
        {heroes ? <HeroesList heroes={heroes} /> : <p>No Data</p>}
      </Loading>
      {isError && <p>Sorry, looks like our API has been smashed!</p>}
    </section>
  )
}

export default Heroes
