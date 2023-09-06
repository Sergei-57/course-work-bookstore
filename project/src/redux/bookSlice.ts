import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { requestBook } from '../services/books'
import { BooksState } from '../types/interface'

interface BookState {
  bookDetails: BooksState
  loadingDetails: boolean
  errorDetails: boolean
}

export const fetchBook = createAsyncThunk<BooksState, string>('bookDetails/fetchBook', async (isbn13: string) => {
  const bookDetails = await requestBook(isbn13)
  return bookDetails
})

const bookSlice = createSlice({
  name: 'bookDetails',
  initialState: {
    bookDetails: {},
    loadingDetails: false,
    errorDetails: false
  } as BookState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBook.pending, state => {
      state.loadingDetails = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<BooksState>) => {
      state.loadingDetails = false
      state.bookDetails = action.payload
    })
    builder.addCase(fetchBook.rejected, state => {
      state.loadingDetails = false
      state.errorDetails = true
    })
  }
})

export const bookReducer = bookSlice.reducer
