import { useAppSelector } from '../../hook'
import { Title } from '../../components/Title'
import { BackHomeLink } from '../../components/BackHomeLink'
import { BasketBook } from '../../components/BasketBook'
import { BasketPrice } from '../../components/BasketPrice'

export function Cart(): JSX.Element {
  const cart = useAppSelector(state => state.cart.cart)

  function renderBasketBooks() {
    if (cart.length > 0) {
      return cart.map((book) => <BasketBook key={book.isbn13} data={book} />)
    } else {
      return <h2>Your basket is empty</h2>
    }
  }

  return (
    <div>
      <BackHomeLink />
      <Title>Your cart</Title>
      {renderBasketBooks()}
      <BasketPrice />
    </div>
  )
}
