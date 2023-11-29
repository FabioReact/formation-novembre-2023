import { useReducer } from 'react'

enum ActionTypeEnum {
  updateEmail = 'updateEmail',
  updatePassword = 'updatePassword',
  updatePasswordConfirmation = 'updatePasswordConfirmation',
  updatePasswordError = 'updatePasswordError',
  verify = 'verify',
}

type Action =
  | {
      type: ActionTypeEnum
      value: string
    }
  | {
      type: ActionTypeEnum.verify
    }

type State = {
  email: string
  password: string
  passwordConfirmation: string
  passwordError: string | null
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypeEnum.updateEmail: {
      const newState = structuredClone(state)
      newState.email = action.value
      return newState
    }
    case ActionTypeEnum.updatePassword: {
      const newState = structuredClone(state)
      newState.passwordError = null
      newState.password = action.value
      return newState
    }
    case ActionTypeEnum.updatePasswordConfirmation: {
      const newState = structuredClone(state)
      newState.passwordError = null
      newState.passwordConfirmation = action.value
      return newState
    }
    case ActionTypeEnum.verify: {
      const newState = structuredClone(state)
      if (newState.password !== newState.passwordConfirmation) {
        newState.passwordError = 'Not matching passwords'
      }
      return newState
    }
    default:
      throw new Error('Unhandled type in useRegistration')
  }
}

const initialState: State = {
  email: '',
  password: '',
  passwordConfirmation: '',
  passwordError: null,
}

const useRegistration = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateEmail = (value: string) => {
    dispatch({ type: ActionTypeEnum.updateEmail, value })
  }
  const updatePassword = (value: string) => {
    dispatch({ type: ActionTypeEnum.updatePassword, value })
  }
  const updatePasswordConfirmation = (value: string) => {
    dispatch({ type: ActionTypeEnum.updatePasswordConfirmation, value })
  }

  const verify = () => {
    dispatch({ type: ActionTypeEnum.verify })
  }

  return {
    ...state,
    updateEmail,
    updatePassword,
    updatePasswordConfirmation,
    verify,
  }
}

const Register = () => {
  // Objectif. Creer un composant (page) Register, input type email et input type password
  // Les deux inputs devront etre controllés par useState
  // Ajouter un input passwordConfirmation
  // Verifier que les mdp correspondent, sinon afficher une erreur
  // Implementer avec useReducer
  // Bonus: faire un custom hook useRegistration
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const {
    email,
    password,
    passwordConfirmation,
    passwordError,
    updateEmail,
    updatePassword,
    updatePasswordConfirmation,
    verify,
  } = useRegistration()

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(email, password)
    verify()
    // Appel API
    // Si 200, redirection
    // Sinon, affiche erreur
  }

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateEmail(e.target.value)}
            value={email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePassword(e.target.value)}
            value={password}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updatePasswordConfirmation(e.target.value)
            }
            value={passwordConfirmation}
          />
        </fieldset>
        {passwordError && <p>{passwordError}</p>}
        <button type='submit'>Register</button>
      </form>
    </section>
  )
}

export default Register
