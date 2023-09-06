import { useState } from 'react'
import { BooksState } from '../../types/interface'

export function Tabs({ data }: { data: BooksState }): JSX.Element {
  const [selectBook, setSelectBook] = useState('description')

  let bookData = selectBook === 'description' ? data.desc :
    selectBook === 'author' ? data.authors :
      selectBook === 'reviews' ? 'Reviews' :
        undefined

  function handleClickSelect(value: string) {
    setSelectBook(value)
  }
  return (
    <>
      <ul className="tabs">
        <li className={selectBook === 'description' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleClickSelect('description')}>Description</li>
        <li className={selectBook === 'author' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleClickSelect('author')}>Author</li>
        <li className={selectBook === 'reviews' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleClickSelect('reviews')}>Reviews</li>
      </ul>
      <div className="tabs__book">
        {bookData}
      </div>
    </>
  )
}
