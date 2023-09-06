import { ReactNode } from 'react'

export type BookProps = {
  data: {
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: {
      [key: string]: string
    }
  }
}

export type ButtonProps = {
  children: ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export type ContainerProps = {
  children: ReactNode
}

export type Book = {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export type Books = {
  error: string
  total: string
  books: Book[]
}

export type TitleProps = {
  children: ReactNode
}

export type PriceProps = {
  price: string
}

export type MainProps = {
  children: ReactNode
}

export type CounterProps = {
  value: number
  onChange: (newValue: number) => void
  price: number
  onTotalSumChange: (newTotalSum: number) => void
}
