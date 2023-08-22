import { client } from '../utils/client'
import { postsEndpoint } from '../utils/api'
import { myPostsEndpoint } from '../utils/api'

export const requestPosts = async (limit = 10, offset = 0, search = '', ordering = 'date') => {
  const { data } = await client.get(postsEndpoint, {
    params: {
      limit,
      offset,
      search,
      ordering
    }
  })

  return data
}

export const requestPostsById = async (id) => {
  const { data } = await client.get(postsEndpoint + '/' + id)

  return data
}

export const requestMyPosts = async (limit = 10, offset = 0, search = '', ordering = 'date') => {
  const { data } = await client.get(myPostsEndpoint, {
    params: {
      limit,
      offset,
      search,
      ordering
    }
  })

  return data
}

export const requestCratePost = async (formData) => {
  const responce = await client.post(postsEndpoint, formData)

  return responce
}
