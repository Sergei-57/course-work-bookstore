import { useAppSelector } from '../../hook'
import { BooksData } from '../../types/interface'
import { Button } from '../Button'

export function BasketCheck(): JSX.Element {
  const cartItems = useAppSelector(state => state.cart.cartItems)
  const vat: number = 12.50
  const totalCartPrice = calculateTotalPrice(cartItems)

  function calculateTotalPrice(dataCart: BooksData[] | undefined): number {
    if (dataCart) {
      const sum: number = dataCart.reduce((acc: number, book: BooksData) => {
        const priceWithoutDollar: string = book.price.replace("$", "")
        const price: number = parseFloat(priceWithoutDollar)
        const quantity: number = isNaN(book.quantity) ? 1 : book.quantity
        return acc + (price * quantity)
      }, 0)
      return parseFloat(sum.toFixed(2))
    }
    return 0
  }

  function finalPrice(): number {
    const booksSum = calculateTotalPrice(cartItems)
    const sumTotal = booksSum + vat
    return parseFloat(sumTotal.toFixed(2))
  }

  function handleClick() {
    console.log(totalCartPrice, vat, finalPrice())
  }
  return (
    <div className="cart-total">
      <div className="cart-total__sum">
        <span>Sum total</span><span>$ {totalCartPrice.toFixed(2)}</span>
      </div>
      <div className="cart-total__vat">
        <span>VAT</span><span>$ {vat}</span>
      </div>
      <div className="cart-total__total-price">
        <span>total:</span><span>$ {finalPrice()}</span>
      </div>
      <div className="cart-total__btn"><Button type="submit" onClick={handleClick}>Check out</Button></div>
    </div>
  )
}
