import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
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
          <input
            type='email'
            id='email'
            {...register('email', {
              required: true,
              minLength: 7,
            })}
          />
          {errors.email && <span>This field contains some errors - {errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            {...register('password', {
              required: true,
              minLength: 8,
            })}
          />
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
