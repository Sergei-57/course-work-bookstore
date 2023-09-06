import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { BooksData } from '../../types/interface'
import { toggleFavorite, handleAddToCart } from '../../helpers'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { Button } from '../Button'
import { Tabs } from '../Tabs'
import favorites from '../../images/favorites.svg'

export function PreviewBook({ data }: { data: BooksData }): JSX.Element {
  const dispatch = useAppDispatch()
  const [isFavorite, setIsFavorite] = useState(() => {
    const storedIsFavorite = localStorage.getItem(`isFavorite ${data.isbn13}`)
    return storedIsFavorite ? JSON.parse(storedIsFavorite) : false
  })
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)
  const cartItems = useAppSelector(state => state.cart.cartItems)

  function handleAddToCartClick() {
    handleAddToCart(data, cartItems, dispatch)
  }

  function handleAddFavorite() {
    const newIsFavorite = !isFavorite
    toggleFavorite(data, newIsFavorite, favoritesCount, dispatch)
    setIsFavorite(newIsFavorite)
    localStorage.setItem(`isFavorite ${data.isbn13}`, JSON.stringify(newIsFavorite))
  }

  useEffect(() => {
    localStorage.setItem('isFavorite', JSON.stringify(isFavorite))
  }, [isFavorite])

  return (
    <div className="preview-book">
      <Title>{data.title}</Title>
      <div className="preview-book__inner">
        <div className="preview-book__col">
          <div className="preview-book__image">
            <img className="preview-book__img" src={data.image} alt="Book" />
            <img className={`preview-book__favorites ${isFavorite ? 'active' : ''}`}
              src={favorites}
              alt="favorite"
              onClick={handleAddFavorite} />
          </div>
        </div>
        <div className="preview-book__col preview-book__border">
          <div className="preview-book__top">
            <div className="preview-book__price">{data.price}</div>
            <div className="preview-book__rating"><Rating rating={data.rating} /></div>
          </div>
          <div className="preview-book__item">
            <span className="preview-book__author">Authors</span>
            <span className='preview-book__link'>{data.authors}</span>
          </div>
          <div className="preview-book__item">
            <span className="preview-book__publisher">Publisher</span>
            <span className='preview-book__link'>{data.publisher}</span>
          </div>
          <div className="preview-book__item">
            <span className="preview-book__language">Language</span>
            <span className='preview-book__link'>{data.language}</span>
          </div>
          <div className="preview-book__item">
            <span className="preview-book__format">Format</span>
            <span className='preview-book__link'>Paper book / ebook (PDF)</span>
          </div>
          <Button type="button" onClick={handleAddToCartClick}>Add to cart</Button>
          <div className="preview-book__wrap">
            <NavLink className="preview-book__wrap_link" to="#">Preview book</NavLink>
          </div>
        </div>
      </div>
      <Tabs data={data} />
    </div>
  )
}
