import { createContext, useContext } from 'react'

type AuthContextType = {
  connected: boolean
  accessToken: string
  email: string
}

const AuthContext = createContext<AuthContextType>(null!)

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider
      value={{
        email: '',
        accessToken: 'fdkkvjksjskskdv-token',
        connected: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export { AuthContextProvider, useAuthContext }
