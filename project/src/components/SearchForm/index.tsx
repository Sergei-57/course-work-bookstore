import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hook'
import { setSearchQuery } from '../../redux/newBooksSlice'
import search from '../../images/search.svg'

export function SearchForm(): JSX.Element {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    dispatch(setSearchQuery(query))
    navigate(`/search/${query}`)
    setQuery('')
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChangeSearch}
          className="search__input"
          placeholder="Search" />
        <button className='search__button'>
          <img
            className="search__icon"
            src={search}
            alt="search" />
        </button>
      </form>
    </div>
  )
}
