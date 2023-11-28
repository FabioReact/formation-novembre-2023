import { Link, Outlet } from 'react-router-dom'

// High Order Component -> Composant d'ordre supérieur
// High Order Function

const Layout = () => {
  return (
    <>
      <nav className='flex justify-center gap-2'>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/heroes'>Heroes</Link>
        <Link to='/learn-useeffect'>UseEffect</Link>
        <Link to='/learn-usestate'>UseState</Link>
        <Link to='/styling'>Styling</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Outlet />
      <footer>Copyright Ambient-IT 2023</footer>
    </>
  )
}

export default Layout
