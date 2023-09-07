import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchBook } from '../../redux/bookSlice'
import { BackHomeLink } from '../../components/BackHomeLink'
import { Loading } from '../../components/Loading'
import { PreviewBook } from '../../components/PreviewBook'
import { Book } from '../../components/Book'
import { Subscribe } from '../../components/Subscribe'
import { Title } from '../../components/Title'

export function SingleBook(): JSX.Element {
  const dispatch = useAppDispatch()
  const isbn13 = useParams()
  const id: string = isbn13.isbn13 !== undefined ? isbn13.isbn13 : ''
  const { book, loading, error } = useAppSelector(state => state.book)
  const { newBooks } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id))
    }
  }, [dispatch, id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error</div>
  }

  // Функция для отоброжения списка рекомендуемых книг
  function renderSimilarBooks() {
    const ratingBooks: string = '4'
    const recommendBooks = newBooks.filter((book) => book.rating > ratingBooks)
    if (recommendBooks.length === 3) {
      return recommendBooks.map((book) => <Book key={book.isbn13} data={book} />)
    }
  }

  return (
    <div className="book">
      <BackHomeLink />
      <PreviewBook data={book} />
      <Subscribe />
      <Title>Similar Books</Title>
      <div className="book__similar">
        {renderSimilarBooks()}
      </div>
    </div>
  )
}
