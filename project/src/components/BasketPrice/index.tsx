import { useAppSelector } from '../../hook'
import { BooksData } from '../../types/interface'
import { Button } from '../Button'

export function BasketPrice(): JSX.Element {
  const cart = useAppSelector(state => state.cart.cart)
  const vat: number = 12.50
  const totalCartPrice = calcTotalPrice(cart)

  function calcTotalPrice(dataCart: BooksData[] | undefined): number {
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

  function calcFinalPrice(): number {
    const booksSum = calcTotalPrice(cart)
    const sumTotal = booksSum + vat
    return parseFloat(sumTotal.toFixed(2))
  }

  function handleCheckoutClick() {
    alert(`Your total price is: ${calcFinalPrice()}`)
  }
  return (
    <div className="basket-price">
      <div className="basket-price__inner">
        <div className="basket-price__sum">
          <span>Sum total</span><span>$ {totalCartPrice.toFixed(2)}</span>
        </div>
        <div className="basket-price__vat">
          <span>VAT</span><span>$ {vat}</span>
        </div>
        <div className="basket-price__total">
          <span>total: </span><span>$ {calcFinalPrice()}</span>
        </div>
      </div>
      <div className="basket-price__button"><Button type="submit" onClick={handleCheckoutClick}>Check out</Button></div>
    </div>
  )
}
