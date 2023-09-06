import { PriceProps } from '../../types/type'

export function Price({ price }: PriceProps): JSX.Element {
  return (
    <div className="price">{price}</div>
  )
}
