import { configureStore } from '@reduxjs/toolkit'
import { languageReducer } from './languageSlice'
import { previewReducer } from './previewSlice'
import { postsReducer } from './postsSlice'
import { postReducer } from './postSlice'
import { userReducer } from './userSlice'
import { myPostsReducer } from './myPostsSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    image: previewReducer,
    posts: postsReducer,
    post: postReducer,
    user: userReducer,
    myPosts: myPostsReducer,
  }
})
