import search from '../../images/search.svg'

export function SearchForm() {
  return (
    <form className='search-form d-flex'>
      <input className="form-control" type="text" placeholder="Search..." />
      <button className="input-group-text">
        <img src={search} alt="search" />
      </button>
    </form>
  )
}
