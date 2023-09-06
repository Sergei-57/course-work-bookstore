import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewBooks, requestBook } from '../services/books'
import { BooksData, NewBooksState } from '../types/interface'

export const fetchNewBooks = createAsyncThunk('newBooks/fetchNewBooks', async (searchQuery?: string) => {
  const { books } = await requestNewBooks(searchQuery)
  const listByIsbn13 = books.map((book) => book.isbn13)
  const bookDetailsPromises = listByIsbn13.map((isbn13: string) => requestBook(isbn13))
  const newBooks = await Promise.all(bookDetailsPromises)
  return newBooks
})

const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    newBooks: [],
    loading: false,
    error: false,
    searchQuery: '',
    currentPage: 1,
    limit: 12,
  } as NewBooksState,

  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.newBooks = []
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<BooksData[]>) => {
      state.loading = false
      state.newBooks = action.payload
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const { setSearchQuery, setPage } = newBooksSlice.actions
export const newBooksReducer = newBooksSlice.reducer
