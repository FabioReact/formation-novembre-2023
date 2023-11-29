import { useAuthContext } from '../context/auth-context'

const Profile = () => {
  const { accessToken, onLogout } = useAuthContext()
  return (
    <section>
      <h1>Profile</h1>
      <p>Access token: {accessToken}</p>
      <button onClick={onLogout}>Logout</button>
    </section>
  )
}

export default Profile
