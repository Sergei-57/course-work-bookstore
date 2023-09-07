import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BooksData, CartState } from '../types/interface'

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<BooksData[]>) => {
      state.cart = action.payload
    },
    addToCart: (state, action: PayloadAction<BooksData>) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<BooksData>) => {
      state.cart = state.cart.filter(item => item.isbn13 !== action.payload.isbn13)
    },
  },
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
