import { NavLink, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

// High Order Component -> Composant d'ordre supérieur
// High Order Function

const Layout = () => {
  const { connected, onLogout } = useAuthContext()
  const getActiveClassName = ({ isActive }: any) => (isActive ? 'text-red-600' : '')
  let elements
  if (connected) {
    elements = (
      <>
        <NavLink className={getActiveClassName} to='/profile'>
          Profile
        </NavLink>{' '}
        <button onClick={onLogout}>Logout</button>
      </>
    )
  } else {
    elements = (
      <>
        <NavLink className={getActiveClassName} to='/register'>
          Register
        </NavLink>
        <NavLink className={getActiveClassName} to='/login'>
          Login
        </NavLink>
      </>
    )
  }
  return (
    <>
      <nav className='flex justify-center gap-2'>
        <NavLink className={getActiveClassName} to='/'>
          Home
        </NavLink>
        <NavLink className={getActiveClassName} to='/search'>
          Search
        </NavLink>
        <NavLink className={getActiveClassName} to='/heroes'>
          Heroes
        </NavLink>
        <NavLink className={getActiveClassName} to='/learn-useeffect'>
          UseEffect
        </NavLink>
        <NavLink className={getActiveClassName} to='/learn-usestate'>
          UseState
        </NavLink>
        <NavLink className={getActiveClassName} to='/counter'>
          UseCounter
        </NavLink>
        <NavLink className={getActiveClassName} to='/styling'>
          Styling
        </NavLink>
        {elements}
      </nav>
      <Outlet />
      <footer>Copyright Ambient-IT 2023</footer>
    </>
  )
}

export default Layout
