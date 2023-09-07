import { useState } from 'react'
import { CounterProps } from '../../types/interface'

export function Counter({ initialValue = 1, onChange }: CounterProps): JSX.Element {
  const [count, setCount] = useState(() => {
    const countFromLocalStorage = localStorage.getItem('count')
    if (countFromLocalStorage) {
      return Number(countFromLocalStorage)
    }
    return initialValue
  })

  const decrementCount = () => {
    if (count > 1) {
      const newCount = count - 1
      setCount(newCount)
      onChange(newCount)
    }
  }

  const incrementCount = () => {
    const newCount = count + 1
    setCount(newCount)
    onChange(newCount)
  }

  return (
    <div className="counter mt-5">
      <button className="counter__button" onClick={decrementCount}>-</button>
      <span className="counter__number">{count}</span>
      <button className="counter__button" onClick={incrementCount}>+</button>
    </div>
  )
}
