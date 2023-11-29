import { useEffect, useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)
  const [isStopped, setIsStopped] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!isStopped) setCounter((prevCounter) => prevCounter + 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [isStopped])

  const start = () => {
    setIsStopped(false)
  }

  const stop = () => {
    setIsStopped(true)
  }

  const incremente = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  return { counter, start, stop, incremente }
}

export { useCounter }
