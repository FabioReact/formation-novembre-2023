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
import { AuthContextProvider } from './context/auth-context'
import Profile from './pages/Profile'
import AuthRoute from './hoc/AuthRoute'
import Battle from './pages/Battle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import Heroes from './pages/Heroes'
import { Suspense, lazy } from 'react'
import Spinner from './components/Spinner'

const Heroes = lazy(() => import('./pages/Heroes'))
const Counter = lazy(() => import('./pages/Counter'))
const Optimisations = lazy(() => import('./pages/Optimisations'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path='/heroes'
        element={
          <Suspense fallback={<div>Loading Heroes...</div>}>
            <Heroes />
          </Suspense>
        }
      />
      <Route path='/search' element={<SearchHeroes />} />
      <Route path='/battle' element={<Battle />} />
      <Route path='/learn-useeffect' element={<LearnUseEffect />} />
      <Route path='/learn-usestate' element={<LearnUseState />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/styling' element={<StylingComponent />} />
      <Route path='/optimisations' element={<Optimisations />} />
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
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
