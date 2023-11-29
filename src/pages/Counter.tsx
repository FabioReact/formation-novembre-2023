import { useCounter } from '../hooks/useCounter'

const Counter = () => {
  const { counter, start, stop } = useCounter()
  return (
    <section>
      <h1>Counter Exercice</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Resume</button>
    </section>
  )
}

export default Counter
