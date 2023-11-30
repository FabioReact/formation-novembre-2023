import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Title>Heroes Arena</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id omnis provident
        itaque vero ipsum!
      </p>
      <button onClick={() => navigate('/battle')}>Battle</button>
    </>
  )
}

export default Home
