import { useAppDispatch, useAppSelector } from '../../hook'
import { removeFromCart, setCart } from '../../redux/cartSlice'
import { BooksData } from '../../types/interface'
import { Price } from '../Price'
import { Counter } from '../Counter'
import closed from '../../images/closed.svg'

export function CartBook({ data }: { data: BooksData }): JSX.Element {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart.cart)

  function handleRemoveFromCart(item: BooksData) {
    dispatch(removeFromCart(item))
    const updatedCart = cart.filter(cartItem => cartItem.isbn13 !== item.isbn13)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    localStorage.setItem('cartCount', String(updatedCart.length))
    dispatch(setCart(updatedCart))
  }

  const handleCounterChange = (value: number) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.isbn13 === data.isbn13) {
        const updatedCart = { ...cartItem, quantity: value }
        return updatedCart
      }
      return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    dispatch(setCart(updatedCart))
  }

  return (
    <div className="cart-book">
      <div className="cart-book__inner">
        <div className="cart-book__col">
          <div className="cart-book__images">
            <img className="cart-book__img" src={data.image} alt="book" />
          </div>
          <div className="cart-book__info">
            <div className="cart-book__title">{data.title}</div>
            <div className="cart-book__authors">
              <span className="cart-book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
            </div>
            <div className="cart-book__counter">
              <Counter initialValue={data.quantity} onChange={value => handleCounterChange(value)} />
            </div>
          </div>
        </div>
        <Price price={data.price} />
        <div className="cart-book__remove">
          <img onClick={() => handleRemoveFromCart(data)} className="cart-book__icon" src={closed} alt="closed" />
        </div>
      </div>
    </div>
  )
}
