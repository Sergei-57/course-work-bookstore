import { useAppSelector } from '../../hook'
import { Title } from '../../components/Title'
import { BackHomeLink } from '../../components/BackHomeLink'
import { CartBook } from '../../components/CartBook'
import { BasketCheck } from '../../components/BasketCheck'

export function Cart(): JSX.Element {
  const cartItems = useAppSelector(state => state.cart.cartItems)

  function renderBasketBooks() {
    if (cartItems.length > 0) {
      return cartItems.map((book) => <CartBook key={book.isbn13} data={book} />)
    } else {
      return <h2>Your basket is empty</h2>
    }
  }

  return (
    <div>
      <BackHomeLink />
      <Title>Your cart</Title>
      {renderBasketBooks()}
      <BasketCheck data={cartItems} />
    </div>
  )
}
