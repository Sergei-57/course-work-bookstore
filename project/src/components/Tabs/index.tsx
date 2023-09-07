import { useState } from 'react'
import { BooksState } from '../../types/interface'

export function Tabs({ data }: { data: BooksState }): JSX.Element {
  const [selectTabs, setSelectTabs] = useState('description')

  let tabsContent = selectTabs === 'description' ? data.desc :
    selectTabs === 'author' ? data.authors :
      selectTabs === 'reviews' ? 'Reviews' :
        undefined

  function handleTabClick(value: string) {
    setSelectTabs(value)
  }

  return (
    <div>
      <ul className="tabs">
        <li className={selectTabs === 'description' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('description')}>Description</li>
        <li className={selectTabs === 'author' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('author')}>Author</li>
        <li className={selectTabs === 'reviews' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('reviews')}>Reviews</li>
      </ul>
      <div className="tabs__book">
        {tabsContent}
      </div>
    </div>
  )
}
