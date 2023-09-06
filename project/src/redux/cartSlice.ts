import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BooksData } from '../types/interface'

interface CartState {
  cartItems: BooksData[]
  cartItemCount: number
}

const initialState: CartState = {
  cartItems: [],
  cartItemCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<BooksData[]>) => {
      state.cartItems = action.payload
      state.cartItemCount = action.payload.length
    },
    setCartItemCount: (state, action: PayloadAction<number>) => {
      state.cartItemCount = action.payload
    },
    addToCart: (state, action: PayloadAction<BooksData>) => {
      state.cartItems.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<BooksData>) => {
      state.cartItems = state.cartItems.filter(item => item.isbn13 !== action.payload.isbn13)
    },
  },
})

export const { addToCart, removeFromCart, setCartItems, setCartItemCount } = cartSlice.actions
export const cartReducer = cartSlice.reducer
