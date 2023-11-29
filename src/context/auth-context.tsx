import { createContext, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

type AuthContextType = {
  connected: boolean
  accessToken: string
  email: string
  onLogin: (accessToken: string) => void
}

const AuthContext = createContext<AuthContextType>(null!)

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState('')
  const [email, setEmail] = useState('')
  const [connected, setConnected] = useState(false)

  const onLogin = (accessToken: string) => {
    setAccessToken(accessToken)
    const decoded = jwtDecode<{ email: string }>(accessToken)
    setConnected(true)
    setEmail(decoded.email)
  }

  return (
    <AuthContext.Provider
      value={{
        email,
        accessToken,
        connected,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export { AuthContextProvider, useAuthContext }
