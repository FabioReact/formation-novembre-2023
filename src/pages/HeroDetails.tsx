import { useParams } from 'react-router-dom'
import Title from '../components/Title'
// import { searchHeroById } from '../api/heroes'
// import { useQuery } from '@tanstack/react-query'
import Loading from '../components/Loading'
import HeroCard from '../components/HeroCard'
import { useGetHeroByIdQuery } from '../redux/services/heroes'

const HeroDetails = () => {
  const { id } = useParams()

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['hero', id],
  //   queryFn: () => searchHeroById(id!),
  // })
  const { isLoading, isError, data } = useGetHeroByIdQuery(id!)

  if (isError) return <div>Oops, we have an error :/</div>

  return (
    <Loading isLoading={isLoading}>
      <section>
        <Title>HeroDetails</Title>
        {data ? <HeroCard hero={data} /> : <div>No data :/</div>}
      </section>
    </Loading>
  )
}

export default HeroDetails
