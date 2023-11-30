import { useAuthContext } from '../context/auth-context'
import Title from '../components/Title'

const Profile = () => {
  const { accessToken, onLogout } = useAuthContext()
  return (
    <section>
      <Title>Profile</Title>
      <p>Access token: {accessToken}</p>
      <button onClick={onLogout}>Logout</button>
    </section>
  )
}

export default Profile
