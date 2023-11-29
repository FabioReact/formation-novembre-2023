export const registerUser = (email: string, password: string) => {
  return fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      console.error(error)
    })
}
