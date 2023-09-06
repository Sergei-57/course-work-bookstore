import { useAppSelector } from '../../hook'
import { Title } from '../../components/Title'
import { BackHomeLink } from '../../components/BackHomeLink'
import { CartBook } from '../../components/CartBook'
import { BasketCheck } from '../../components/BasketCheck'

export function Cart(): JSX.Element {
  const cart = useAppSelector(state => state.cart.cart)

  function renderBasketBooks() {
    if (cart.length > 0) {
      return cart.map((book) => <CartBook key={book.isbn13} data={book} />)
    } else {
      return <h2>Your basket is empty</h2>
    }
  }

  return (
    <div>
      <BackHomeLink />
      <Title>Your cart</Title>
      {renderBasketBooks()}
      <BasketCheck />
    </div>
  )
}
