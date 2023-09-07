import { ReactNode } from 'react'

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface Books {
  error: string
  total: string
  books: Book[]
}
export interface BooksState {
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
  language: string
  favorite: boolean
  quantity: number
  data: BookProps['data']
}

export interface BooksData extends BooksState {
  favorite: boolean
  quantity: number
  pdf: {
    [key: string]: string
  }
  data: BookProps['data']
}

export interface NewBooksState {
  newBooks: BooksData[]
  loading: boolean
  error: boolean
  searchQuery: string
  currentPage: number,
  limit: number
}
export interface FavoriteState {
  favoritesBooks: BooksData[]
  favoritesCount: number
}

export interface CartState {
  cart: BooksData[]
  cartCount: number
}

export interface BookState {
  book: BooksState
  loading: boolean
  error: boolean
}

export interface BookProps {
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

export interface ButtonProps {
  children: ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export interface CounterProps {
  value: number
  onChange: (newValue: number) => void
  price: number
  onTotalSumChange: (newTotalSum: number) => void
}

export interface PaginationProps {
  books: BookProps[]
  limit: number
  pageNumber: number
}

export interface CounterProps {
  initialValue: number
  onChange: (count: number) => void
}
