import { useAppSelector } from '../../hook'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hook'
import { setFavorites } from '../../redux/favoriteSlice'
import { Title } from '../../components/Title'
import { BackHomeLink } from '../../components/BackHomeLink'
import { FavoriteBook } from '../../components/FavoriteBook'
import { Book } from '../../components/Book'

export function MyFavorites(): JSX.Element {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)
  const { newBooks } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    const favoritesBooks = JSON.parse(localStorage.getItem('favoritesBooks') || '[]')
    dispatch(setFavorites(favoritesBooks))
  }, [])

  // Функция для отображения списка избранных книг
  function renderFavorites() {
    return favoritesBooks.map((book) => (
      <FavoriteBook key={book.isbn13} data={book} />
    ))
  }

  // Функция для отоброжения списка популярных книг
  function renderPopularBooks() {
    const ratingBooks: string = '4'
    const recommendBooks = newBooks.filter((book) => book.rating > ratingBooks)
    if (recommendBooks.length === 3) {
      return recommendBooks.map((book) => <Book key={book.isbn13} data={book} />)
    }
  }

  return (
    <div>
      <BackHomeLink />
      <Title>Favorites</Title>
      <div className="favorites">
        {favoritesCount > 0 && renderFavorites()}
      </div>
      <Title>Popular Books</Title>
      <div className="favorites__popular">
        {renderPopularBooks()}
      </div>
    </div>
  )
}
