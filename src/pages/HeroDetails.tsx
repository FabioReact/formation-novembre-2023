import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Title from '../components/Title'
import HeroCard from '../components/HeroCard'
import { Hero } from '../types/hero'
import { searchHeroById } from '../api/heroes'

const HeroDetails = () => {
  const data = useLoaderData() as Hero

  return (
    <section>
      <Title>HeroDetails</Title>
      {data ? <HeroCard hero={data} /> : <div>No data :/</div>}
    </section>
  )
}

export const heroDetailsLoader = ({ params }: LoaderFunctionArgs<{ id: string }>) =>
  searchHeroById(params.id!)

export default HeroDetails
