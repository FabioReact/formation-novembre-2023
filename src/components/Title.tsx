import { memo } from 'react'

const Title = memo(({ children }: { children: React.ReactNode }) => {
  console.log('Render of Title component')
  return (
    <h1 className='uppercase text-center text-5xl tracking-widest font-thin my-8'>{children}</h1>
  )
})

export default Title
