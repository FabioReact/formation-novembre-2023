import { useAuthContext } from "../context/auth-context"

const Profile = () => {
  const { accessToken } = useAuthContext()
  return (
    <section>
      <h1>Profile</h1>
      <p>Access token: {accessToken}</p>
    </section>
  )
}

export default Profile
