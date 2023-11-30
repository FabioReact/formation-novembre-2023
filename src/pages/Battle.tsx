import { useRef, useState } from 'react'
import { searchHeroes } from '../api/heroes'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'
import Title from '../components/Title'

type SelectPlayerProps = {
  label: string
  selectPlayer: (hero: Hero) => void
}

const SelectPlayer = ({ label, selectPlayer }: SelectPlayerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const searchValue = inputRef.current?.value || ''
    const data = await searchHeroes(searchValue)
    if (data) setHeroes(data)
  }

  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit}>
        <label htmlFor={`player${label}`}>Select Player {label}</label>
        <input
          ref={inputRef}
          className='border-b-2 border-black'
          type='text'
          id={`player${label}`}
          name={`player${label}`}
        />
        <button type='submit'>Search</button>
      </form>
      <div>
        {heroes.map((hero) => (
          <div
            className='border rounded p-2 my-1 border-gray-700 cursor-pointer hover:bg-gray-200'
            key={hero.id}
            onClick={() => selectPlayer(hero)}
          >
            <span className='font-semibold text-gray-500 pr-2'>#{hero.id}</span> {hero.name}
          </div>
        ))}
      </div>
    </div>
  )
}

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Hero | null>(null)
  const [playerTwo, setPlayerTwo] = useState<Hero | null>(null)
  const selectPlayerOne = (hero: Hero) => {
    setPlayerOne(hero)
  }
  const selectPlayerTwo = (hero: Hero) => {
    setPlayerTwo(hero)
  }
  return (
    <section>
      <Title>Battle</Title>
      <div className='flex justify-center gap-24'>
        <SelectPlayer label='One' selectPlayer={selectPlayerOne} />
        <SelectPlayer label='Two' selectPlayer={selectPlayerTwo} />
      </div>
      <div>
        {playerOne && <HeroCard hero={playerOne} />}
        {playerTwo && <HeroCard hero={playerTwo} />}
      </div>
    </section>
  )
}

export default Battle
