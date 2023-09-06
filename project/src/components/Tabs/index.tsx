import { useState } from 'react'
import { BooksState } from '../../types/interface'

export function Tabs({ data }: { data: BooksState }): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('description')

  let tabContent = selectedTab === 'description' ? data.desc :
    selectedTab === 'author' ? data.authors :
      selectedTab === 'reviews' ? 'Reviews' :
        undefined

  function handleTabClick(value: string) {
    setSelectedTab(value)
  }

  return (
    <div>
      <ul className="tabs">
        <li className={selectedTab === 'description' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('description')}>Description</li>
        <li className={selectedTab === 'author' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('author')}>Author</li>
        <li className={selectedTab === 'reviews' ? 'tabs__item active' : 'tabs__item'} onClick={() => handleTabClick('reviews')}>Reviews</li>
      </ul>
      <div className="tabs__book">
        {tabContent}
      </div>
    </div>
  )
}
