import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookReducer } from './bookSlice'
import { favoriteReducer } from './favoriteSlice'
import { cartReducer } from './cartSlice'
export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    book: bookReducer,
    favorite: favoriteReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
