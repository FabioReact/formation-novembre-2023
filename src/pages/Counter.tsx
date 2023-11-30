import { useCounter } from '../hooks/useCounter'
import Title from '../components/Title'

const Counter = () => {
  const { counter, start, stop } = useCounter()
  return (
    <section>
      <Title>Counter Exercice</Title>
      <p>Counter Value: {counter}</p>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Resume</button>
    </section>
  )
}

export default Counter
