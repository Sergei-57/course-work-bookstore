import { useAppSelector } from '../../hook'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hook'
import { Title } from '../../components/Title'
import { BackHomeLink } from '../../components/BackHomeLink'
import { FavoriteBook } from '../../components/FavoriteBook'
import { setFavorites } from '../../redux/favoriteSlice'

export function MyFavorites(): JSX.Element {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)

  useEffect(() => {
    const favoritesBooks = JSON.parse(localStorage.getItem('favoritesBooks') || '[]')
    dispatch(setFavorites(favoritesBooks))
  }, [])

  function renderFavorites() {
    return favoritesBooks.map((book) => (
      <FavoriteBook key={book.isbn13} data={book} />
    ))
  }

  return (
    <>
      <BackHomeLink />
      <Title>Favorites</Title>
      <div className="favorites">
        {favoritesCount > 0 && renderFavorites()}
      </div>
    </>
  )
}
