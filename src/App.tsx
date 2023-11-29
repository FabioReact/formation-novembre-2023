import Heroes from './pages/Heroes'
import LearnUseEffect from './pages/LearnUseEffect'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Home from './pages/Home'
import LearnUseState from './pages/LearnUseState'
import StylingComponent from './pages/StylingComponent'
import Layout from './hoc/Layout'
import SearchHeroes from './pages/SearchHeroes'
import Register from './pages/Register'
import Login from './pages/Login'
import Counter from './pages/Counter'
import { AuthContextProvider } from './context/auth-context'
import Profile from './pages/Profile'
import AuthRoute from './hoc/AuthRoute'
import Battle from './pages/Battle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/heroes' element={<Heroes />} />
      <Route path='/search' element={<SearchHeroes />} />
      <Route path='/battle' element={<Battle />} />
      <Route path='/learn-useeffect' element={<LearnUseEffect />} />
      <Route path='/learn-usestate' element={<LearnUseState />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/styling' element={<StylingComponent />} />
      {/* <Route path='/profile' element={<AuthRoute><Profile /></AuthRoute>} /> */}
      <Route element={<AuthRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Route>,
  ),
)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
