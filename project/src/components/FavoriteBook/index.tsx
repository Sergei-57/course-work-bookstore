import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { BooksData } from '../../types/interface'
import { toggleFavorite } from '../../helpers'
import { Rating } from '../Rating'
import { Price } from '../Price'
import favorites from '../../images/favorites.svg'

export function FavoriteBook({ data }: { data: BooksData }): JSX.Element {
  const [isBookFavorite, setIsBookFavorite] = useState(false)
  const dispatch = useAppDispatch()
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)

  function handleToggleFavorite() {
    const newIsFavorite = !isBookFavorite
    toggleFavorite(data, newIsFavorite, favoritesCount, dispatch)
    setIsBookFavorite(newIsFavorite)
    localStorage.setItem(`isFavorite_${data.isbn13}`, JSON.stringify(newIsFavorite))
  }

  useEffect(() => {
    const storedIsFavorite = localStorage.getItem(`isFavorite_${data.isbn13}`)
    if (storedIsFavorite) {
      setIsBookFavorite(JSON.parse(storedIsFavorite))
    }
  }, [])

  if (!isBookFavorite) {
    return <></>
  }

  return (
    <div className="favorite-book">
      <img src={data.image} alt="book" />
      <div className="favorite-book__info">
        <NavLink to={`/${data.isbn13}`} className="favorite-book__title">{data.title}</NavLink>
        <div className="favorite-book__authors">
          <span className="favorite-book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
        </div>
        <div className="favorite-book__rating">
          <Price price={data.price} />
          <Rating rating={data.rating} />
        </div>
      </div>
      <div className="favorite-book__favorites">
        <img
          src={favorites}
          alt="favorite"
          className={`favorite-book__icon ${isBookFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
        />
      </div>
    </div>
  )
}
