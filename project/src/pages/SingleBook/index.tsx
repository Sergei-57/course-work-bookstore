import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { useParams } from 'react-router-dom'

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
  const { bookDetails, loadingDetails, errorDetails } = useAppSelector(state => state.bookDetails)
  const { newBooks } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id))
    }
  }, [dispatch, id])
  if (loadingDetails) {
    return <Loading />
  }
  if (errorDetails) {
    return <div>Error</div>
  }

  function renderSimilartedBooks() {
    const thresHoldRating: string = '4'
    const recommendedBooks = newBooks.filter((book) => book.rating > thresHoldRating)
    if (recommendedBooks.length === 3) {
      return recommendedBooks.map((book) => <Book key={book.isbn13} data={book} />)
    }
  }

  return (
    <div className="book">
      <BackHomeLink />
      <PreviewBook data={bookDetails} />
      <Subscribe />
      <Title>Similar Books</Title>
      <div className="book__similated">
        {renderSimilartedBooks()}
      </div>
    </div>
  )
}
