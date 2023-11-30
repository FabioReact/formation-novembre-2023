import { useState, memo, useCallback, useMemo } from 'react'
import Title from '../components/Title';

const Button = memo(({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  console.log('Render de button', children)
  return <button onClick={onClick}>{children}</button>
})

const expensiveCompute = (a: number, b: number) => {
  console.time('compute')
  let counter = 2000000000
  while (counter > 0) {
    counter--
  }
  console.timeEnd('compute')
  return a * b
}

// React.memo -> Permet de memoiser un composant
// useCallback -> Permet de memoïser une reference
// useMemo -> Permet de memoïser le resultat d'une fonction

const Optimisations = () => {
  const [counter, setCounter] = useState(0)
  const [bonus, setBonus] = useState(1)
  const onIncrement = useCallback(() => {
    setCounter((c) => c + bonus)
  }, [bonus])
  const onDecrement = useCallback(() => {
    setCounter((c) => c - bonus)
  }, [bonus])
  const result = useMemo(() => expensiveCompute(bonus, 12), [bonus])
  return (
    <section>
      <Title>Optimisations</Title>
      <p>Counter: {counter}</p>
      <Button onClick={onIncrement}>Increment</Button>
      <Button onClick={onDecrement}>Decrement</Button>
      <Button onClick={() => setBonus(5)}>+5</Button>
      <Button onClick={() => setBonus(8)}>+8</Button>
      <p>Result of compute: {result}</p>
    </section>
  )
}

// Export nommé
export default Optimisations
