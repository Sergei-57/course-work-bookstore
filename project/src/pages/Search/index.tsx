import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { Loading } from '../../components/Loading'

export function Search(): JSX.Element {
  const allBooks = useAppSelector(state => state.newBooks.newBooks)
  const loading = useAppSelector(state => state.newBooks.loading)
  const error = useAppSelector(state => state.newBooks.error)
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(state => state.newBooks.searchQuery)
  const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    if (searchQuery !== '') {
      dispatch(fetchNewBooks(searchQuery))
    }
  }, [dispatch, searchQuery])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p className='error'>{error}</p>
  }

  function renderFilteredBooks() {
    return filteredBooks.map((book) => (
      <Book key={book.isbn13} data={book} />
    ))
  }

  return (
    <div>
      <Title>‘{searchQuery}’ SEARCH RESULTS</Title>
      <p className='search-result__text'>Found {filteredBooks.length} books</p>
      <div className="search-result">
        {renderFilteredBooks()}
      </div>
    </div>
  )
}
