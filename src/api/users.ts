export const registerUser = (email: string, password: string): Promise<{ accessToken: string }> => {
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
      throw new Error('Register User Error')
    })
}

export const loginUser = (email: string, password: string): Promise<{ accessToken: string }> => {
  return fetch('http://localhost:4000/login', {
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
      throw new Error('Login User Error')
    })
}
