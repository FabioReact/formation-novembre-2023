import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const AuthRoute = () => {
  const { connected } = useAuthContext()
  if (!connected) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

export default AuthRoute
