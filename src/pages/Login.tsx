import { useState } from 'react'

const Login = () => {
  // Objectif. Creer un composant (page) Login, input type email et input type password
  // Les deux inputs devront etre controllés par useState
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            value={password}
          />
        </fieldset>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
