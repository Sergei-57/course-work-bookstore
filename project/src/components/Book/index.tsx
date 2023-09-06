import { NavLink } from 'react-router-dom'
import { Rating } from '../Rating'
import { Price } from '../Price'
import { BookProps } from '../../types/type'

export function Book({ data }: BookProps): JSX.Element {
  return (
    <div className="book" style={{ width: "22rem" }}>
      <div>
        <img className="book__image" src={data.image} alt="book" />
      </div>
      <NavLink to={`/${data.isbn13}`} className="book__title">{data.title}</NavLink>
      <div className="book__info">
        <span className="book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
      </div>
      <div className="book__rating">
        <Price price={data.price} />
        <Rating rating={data.rating} />
      </div>
    </div>
  )
}
