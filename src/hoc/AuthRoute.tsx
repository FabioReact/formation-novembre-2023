import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const AuthRoute = () => {
  const connected = useAppSelector((state) => state.auth.connected)
  if (!connected) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

export default AuthRoute
