import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchNewBooks, setPage } from '../../redux/newBooksSlice'
import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { Loading } from '../../components/Loading'
import { Subscribe } from '../../components/Subscribe'
import { Pagination } from '../../components/Pagination'
import { togglePage } from '../../helpers'

export function Books() {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error, currentPage, limit } = useAppSelector(state => state.newBooks)
  const { pageNumber } = useParams()
  const navigate = useNavigate()
  const pageNumberCount: number = Number(pageNumber)

  useEffect(() => {
    setPage(pageNumberCount)
  }, [dispatch, pageNumberCount])

  useEffect(() => {
    dispatch(fetchNewBooks(''))
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error</div>
  }

  function handleClickPage(event: React.MouseEvent<HTMLDivElement>) {
    togglePage(event, dispatch, newBooks, currentPage, limit, navigate)
  }

  function renderBooks(): JSX.Element[] {
    const startIndex = (currentPage - 1) * limit
    const endIndex = startIndex + limit

    return newBooks.slice(startIndex, endIndex).map((book) => (
      <Book key={book.isbn13} data={book} />
    ))
  }
  // function renderBooks() {
  //   return newBooks.map((book) => <Book key={book.isbn13} data={book} />)
  // }

  return (
    <>
      <Title>New Releases Books</Title>
      <div className="books">
        {newBooks.length && renderBooks()}
      </div>
      <div className="pagination" onClick={handleClickPage}>
        <Pagination books={newBooks} limit={limit} pageNumber={pageNumberCount} />
      </div>
      <Subscribe />
    </>
  )
}
