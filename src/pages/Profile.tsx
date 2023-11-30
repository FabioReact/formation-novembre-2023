import Title from '../components/Title'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import { logout } from '../redux/reducers/authSlice'

const Profile = () => {
  // const { onLogout } = useAuthContext()
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const dispatch = useDispatch()
  return (
    <section>
      <Title>Profile</Title>
      <p>Access token: {accessToken}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </section>
  )
}

export default Profile
