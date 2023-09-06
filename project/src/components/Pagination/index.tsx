import { NavLink } from 'react-router-dom'
import { PaginationProps } from '../../types/interface'

export function Pagination({ books, limit }: PaginationProps): JSX.Element {
  function buildPagination() {
    const numTotalPages = Math.ceil(books.length / limit)
    const pageScheme: (number | string)[] = []
    for (let i = 1; i <= numTotalPages; i++) {
      pageScheme.push(i)
    }
    return pageScheme
  }

  function handleLinkClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function renderPagination() {
    const pages = buildPagination()

    return pages.map((page, index) => {
      return (
        <li key={index} className="pagination__item">
          <NavLink
            to={`/new_books/pages/${page}`}
            data-page={page}
            data-role="getPage"
            className="pagination__link"
            onClick={handleLinkClick}
          >
            {page}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {renderPagination()}
      </ul>
    </div>
  )
}
