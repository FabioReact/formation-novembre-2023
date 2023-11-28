import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

type HeroesListProps = {
  heroes: Hero[]
}

const HeroesList = ({ heroes }: HeroesListProps) => {
  return (
    <div className='flex justify-center gap-16'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroesList
