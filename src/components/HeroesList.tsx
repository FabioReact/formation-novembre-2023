// import { Link } from 'react-router-dom'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

type HeroesListProps = {
  heroes: Hero[]
  render?: (item: React.ReactNode, id: number) => React.ReactNode
}

const HeroesList = ({ heroes, render = (item: React.ReactNode) => item }: HeroesListProps) => {
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
      {heroes.map((hero) => render(<HeroCard key={hero.id} hero={hero} />, hero.id))}
    </div>
  )
}

export default HeroesList
