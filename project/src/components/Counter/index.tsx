import { useState } from 'react'

type CounterProps = {
  initialValue: number
  onChange: (count: number) => void
}

export function Counter({ initialValue = 1, onChange }: CounterProps): JSX.Element {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count')
    if (storedCount) {
      return Number(storedCount)
    }
    return initialValue
  })

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
      onChange(count - 1)
    }
  }

  const increment = () => {
    setCount(count + 1)
    onChange(count + 1)
  }

  return (
    <div className="mt-5">
      <button className="btn btn-danger" onClick={decrement}>-</button>
      <span className="mx-4">{count}</span>
      <button className="btn btn-success" onClick={increment}>+</button>
    </div>
  )
}
