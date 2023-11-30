import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { increment } from '../redux/reducers/counterSlice'

const Home = () => {
  const navigate = useNavigate()
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Title>Heroes Arena</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id omnis provident
        itaque vero ipsum!
      </p>
      <p>Counter value: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => navigate('/battle')}>Battle</button>
    </>
  )
}

export default Home
