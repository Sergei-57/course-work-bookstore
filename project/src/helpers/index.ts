import { ThunkDispatch } from 'redux-thunk'
import { Dispatch } from 'redux'
import { RootState } from '../redux/store'
import { AnyAction } from 'redux'
import { BooksData, Book } from '../types/interface'
import { setFavorites, setFavoritesCount } from '../redux/favoriteSlice'
import { setCart } from '../redux/cartSlice'
import { setPage } from '../redux/newBooksSlice'

export function toggleFavorite(
  data: BooksData,
  isFavorite: boolean,
  favoritesCount: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) {
  let updatFavorites: BooksData[] = [...JSON.parse(localStorage.getItem('favoritesBooks') || '[]')]
  let newFavoritesCount = favoritesCount

  if (!isFavorite) {
    updatFavorites = updatFavorites.filter(book => book.isbn13 !== data.isbn13)
    newFavoritesCount -= 1

  } else {
    updatFavorites = [...updatFavorites, data]
    newFavoritesCount += 1

  }

  dispatch(setFavorites(updatFavorites))
  localStorage.setItem('favoritesBooks', JSON.stringify(updatFavorites))

  dispatch(setFavoritesCount(newFavoritesCount))
  localStorage.setItem('favoritesCount', String(newFavoritesCount))
}

// =============================================================================================

export function handleAddToCart(
  data: BooksData,
  cart: BooksData[],
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) {
  const isBookAlreadyAdded = cart.some(item => item.isbn13 === data.isbn13)

  if (!isBookAlreadyAdded) {
    const updatedCart = [...cart, data]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    localStorage.setItem('cartCount', String(updatedCart.length))
    dispatch(setCart(updatedCart))
  } else {
    alert('Book already added to cart')
  }
}

// =============================================================================================

export function togglePage(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, newBooks: Book[], currentPage: number, limit: number, navigate: (url: string) => void): void {
  const target = event.target as HTMLElement
  const { page, role } = target.dataset as { page: string, role: string }

  if (role === 'getPage') {
    dispatch(setPage(Number(page)))
  }

  if (role === 'decrementPage') {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1))
      navigate(`/new_books/pages/${currentPage - 1}`)
    } else return
  }

  if (role === 'incrementPage') {
    if (currentPage < Math.ceil(newBooks.length / limit)) {
      dispatch(setPage(currentPage + 1))
      navigate(`/new_books/pages/${currentPage + 1}`)
    }
  }
}
