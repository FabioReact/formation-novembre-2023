import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Inputs = {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email().min(7, { message: 'Email trop court - 7 caracteres minimum' }),
  password: z.string().min(8, { message: 'Mot de passe trop court - 8 caracteres minimum' }),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  const onSubmitHandler = (data: Inputs) => {
    // console.log(email, password)
    console.log(data)
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && <span>This field contains some errors - {errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && (
            <span>This field contains some errors - {errors.password.message}</span>
          )}
        </fieldset>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
