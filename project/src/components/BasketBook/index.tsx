import { useAppDispatch, useAppSelector } from '../../hook'
import { removeFromCart, setCart } from '../../redux/cartSlice'
import { BooksData } from '../../types/interface'
import { Counter } from '../Counter'
import closed from '../../images/closed.svg'

export function BasketBook({ data }: { data: BooksData }): JSX.Element {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart.cart)

  // Функция для удаления книги из корзины
  function handleRemoveCart(item: BooksData) {
    dispatch(removeFromCart(item))
    const updateCart = cart.filter(cartItem => cartItem.isbn13 !== item.isbn13)
    localStorage.setItem('cart', JSON.stringify(updateCart))
    localStorage.setItem('cartCount', String(updateCart.length))
    dispatch(setCart(updateCart))
  }

  // Функция для изменения количества книг в корзине
  const handleCounterChange = (value: number) => {
    const updateCart = cart.map(cartItem => {
      if (cartItem.isbn13 === data.isbn13) {
        return { ...cartItem, quantity: value }
      }
      return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
    dispatch(setCart(updateCart))
  }

  return (
    <div className="basket-book">
      <div className="basket-book__inner">
        <div className="basket-book__col">
          <div className="basket-book__images">
            <img className="basket-book__img" src={data.image} alt="book" />
          </div>
          <div className="basket-book__info">
            <div className="basket-book__title">{data.title}</div>
            <div className="basket-book__authors">
              <span className="basket-book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
            </div>
            <div className="basket-book__counter">
              <Counter initialValue={data.quantity} onChange={value => handleCounterChange(value)} />
            </div>
          </div>
        </div>
        <div className="basket-book__price">{data.price}</div>
        <div className="basket-book__remove">
          <img onClick={() => handleRemoveCart(data)} className="basket-book__icon" src={closed} alt="closed" />
        </div>
      </div>
    </div>
  )
}
