import Heroes from "./pages/Heroes";
import LearnUseEffect from "./pages/LearnUseEffect";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import LearnUseState from "./pages/LearnUseState";
import StylingComponent from "./pages/StylingComponent";
import Layout from "./hoc/Layout";
import SearchHeroes from "./pages/SearchHeroes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/heroes" element={<Heroes />} />
      <Route path="/learn-useeffect" element={<LearnUseEffect />} />
      <Route path="/learn-usestate" element={<LearnUseState />} />
      <Route path="/styling" element={<StylingComponent />} />
      <Route path="/search" element={<SearchHeroes />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
