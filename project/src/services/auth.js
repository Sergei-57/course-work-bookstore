import { client } from '../utils/client'
import { signUpEndpoint, signInEndpoint, userActivationEndpoint, refreshJwtTokenEndpoint } from '../utils/api'

export const requestSignUp = async (body) => {
  const { data } = await client.post(signUpEndpoint, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return data
}

export const requestUserActivation = async (body) => {
  const response = await client.post(userActivationEndpoint, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response
}

export const requestSignIn = async (body) => {
  const response = await client.post(signInEndpoint, body)

  return response
}

export const requestRefreshJwtToken = async (body) => {
  const response = await client.post(refreshJwtTokenEndpoint, body)

  return response
}
