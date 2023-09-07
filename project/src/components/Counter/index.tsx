import { useState } from 'react'

type CounterProps = {
  initialValue: number
  onChange: (count: number) => void
}

export function Counter({ initialValue = 1, onChange }: CounterProps): JSX.Element {
  const [count, setCount] = useState(() => {
    const countLocalStorage = localStorage.getItem('count')
    if (countLocalStorage) {
      return Number(countLocalStorage)
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
