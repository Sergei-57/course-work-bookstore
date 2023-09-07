import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BooksData, FavoriteState } from '../types/interface'

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesBooks: [],
    favoritesCount: 0,
  } as FavoriteState,

  reducers: {
    setFavorites: (state, action: PayloadAction<BooksData[]>) => {
      const updatBooks = Array.from(action.payload)
      updatBooks.forEach((book) => {
        const index = state.favoritesBooks.findIndex((favBook) => favBook.isbn13 === book.isbn13)

        if (index !== -1) {
          state.favoritesBooks[index] = { ...state.favoritesBooks[index], ...book }
        } else {
          state.favoritesBooks.push(book)
        }
      })
      localStorage.setItem('favoritesBooks', JSON.stringify(state.favoritesBooks))
    },
    setFavoritesCount: (state, action: PayloadAction<number>) => {
      state.favoritesCount = action.payload
    },
  }
})

export const { setFavorites, setFavoritesCount } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer
