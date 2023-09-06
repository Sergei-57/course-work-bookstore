import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { UserThumbnail } from './pages/UserThumbnail'
import { Autorization } from './pages/Autorization'
import { Search } from './pages/Search'
import { SingleBook } from './pages/SingleBook'
import { MyFavorites } from './pages/MyFavorites'
import { Cart } from './pages/Cart'
import { ResetPassword } from './pages/ResetPassword'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/new_books/pages/1" replace={true} />
      },
      {
        path: '/new_books/pages/:pageNumber',
        element: <Books />
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/user',
        element: <UserThumbnail />,
        children: [
          {
            path: '/user/',
            element: <Navigate to="/user/autorization" replace={true} />
          },
          {
            path: '/user/autorization',
            element: <Autorization />,
            children: [
              {
                path: '/user/autorization/',
                element: <Navigate to={"/user/autorization/sign-in"} />
              },
              {
                path: '/user/autorization/sign-in',
                element: <SignIn />
              },
              {
                path: '/user/autorization/sign-up',
                element: <SignUp />
              }
            ]
          },
        ]
      },
      {
        path: '/user/reset-password',
        element: <ResetPassword />
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:isbn13',
        element: <SingleBook />
      },
      {
        path: '/my-favorites',
        element: <MyFavorites />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
  },
]);
