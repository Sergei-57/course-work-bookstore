import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestBook } from '../services/books'
import { BooksState, BookState } from '../types/interface'

export const fetchBook = createAsyncThunk<BooksState, string>('book/fetchBook', async (isbn13: string) => {
  const book = await requestBook(isbn13)
  return book
})

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: {},
    loading: false,
    error: false
  } as BookState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBook.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<BooksState>) => {
      state.loading = false
      state.book = action.payload
    })
    builder.addCase(fetchBook.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const bookReducer = bookSlice.reducer
