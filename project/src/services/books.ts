import { client } from '../utils/client'
import { newBooksEndPoint, bookEndPoint } from '../api'
import { Books, BooksState } from '../types/interface'

export const requestNewBooks = async (searchQuery?: string): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      searchQuery: searchQuery || undefined
    }
  })
  return data as Books
}

export const requestBook = async (id: string): Promise<BooksState> => {
  const { data } = await client.get<BooksState>(`${bookEndPoint}/${id}`)
  return data as BooksState
}
