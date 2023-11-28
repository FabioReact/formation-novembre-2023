import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav className="flex justify-center gap-2">
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/learn-useeffect">UseEffect</Link>
        <Link to="/learn-usestate">UseState</Link>
        <Link to="/styling">Styling</Link>
      </nav>
      <Outlet />
      <footer>Copyright Ambient-IT 2023</footer>
    </>
  );
};

export default Layout;
