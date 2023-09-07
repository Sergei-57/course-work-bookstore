import { NavLink } from 'react-router-dom'
import { PaginationProps } from '../../types/interface'

export function Pagination({ books, limit }: PaginationProps): JSX.Element {
  // Функция для вычисления общего количества страниц
  function buildPagination() {
    const numTotalPages = Math.ceil(books.length / limit)
    const pageScheme: (number | string)[] = []
    for (let i = 1; i <= numTotalPages; i++) {
      pageScheme.push(i)
    }
    return pageScheme
  }

  // Функция для перехода на страницу и прокручивания страницы вверх
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
