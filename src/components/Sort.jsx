import React, { useEffect, useState } from 'react'
import store from '../store'

const sortTypes = ['популярности', 'цене', 'алфавиту']
const sortNames = ['rating', 'price', 'name']

const Sort = () => {
  const [sortOpen, setSortOpen] = useState(false)
  const [activeType, setActiveType] = useState(0)
  const controlSort = () => setSortOpen((prevState) => !prevState)
  const selectType = (index) => {
    setSortOpen(false)
    setActiveType(index)
  }

  useEffect(() => {
    const sortBlock = document.querySelector('.sort')

    const closeLabel = (e) => {
      const path = e.composedPath()
      if (!path.includes(sortBlock)) setSortOpen(false)
    }
    window.addEventListener('click', closeLabel)

    return () => window.removeEventListener('click', closeLabel)
  }, [])

  useEffect(() => {
    const order = activeType === 1 ? 'desc' : 'asc'
    store.setSortType(sortNames[activeType], order)
  }, [activeType])

  return (
    <div className="sort">
      <div className="sort__label" onClick={controlSort}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sortTypes[activeType]}</span>
      </div>
      <div
        className="sort__popup"
        style={{
          display: sortOpen ? 'block' : 'none',
        }}
      >
        <ul>
          {sortTypes.map((item, index) => (
            <li key={item} onClick={() => selectType(index)} className={activeType === index ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sort
