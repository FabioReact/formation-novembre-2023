import { useState } from "react";
import classes from "./App.module.css";
import Paragraph from "./Paragraph";
import MyForm from "./Form"; // import par defaut
// import { Form as MyForm } from "./Form";
import Heroes from "./pages/Heroes";
import LearnUseEffect from "./pages/LearnUseEffect";
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/learn-useeffect">UseEffect</Link>
      </nav>
      <Outlet />
      <footer>Copyright Ambient-IT 2023</footer>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/heroes" element={<Heroes />} />
      <Route path="/learn-useeffect" element={<LearnUseEffect />} />
    </Route>
  )
)

function App() {
  const headingStyle = {
    color: "red",
  };
  const onClickCallback = (arg: unknown) => {
    console.log("Button clicked", arg);
  };

  const [counter, setCounter] = useState(0);
  const [connected, setConnected] = useState(false);

  const logCallback = () => {
    setConnected((b) => !b)
  }

  const increment = () => {
    // Attention, les setState sont asynchrones
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 0
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 1
    // console.log(counter);
  }

  const [showLearnUseEffect, setShowLearnUseEffect] = useState(true)

  return (
    <RouterProvider router={router} />
  );
}

export default App;
