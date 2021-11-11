import React, { useEffect, useState } from 'react'
import store from '../store'

const categoryTypes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = () => {
  const [type, setType] = useState(null)

  useEffect(() => {
    store.setFilter(type)
  }, [type])
  return (
    <div className="categories">
      <ul>
        <li onClick={() => setType(null)} className={null === type ? 'active' : ''}>
          Все
        </li>
        {categoryTypes.map((item, index) => (
          <li key={item} onClick={() => setType(index)} className={index === type ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
