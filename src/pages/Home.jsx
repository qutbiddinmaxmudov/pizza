import React from 'react'
import Categories from '../components/Categories'
import PizzasCatalog from '../components/PizzasCatalog'
import Sort from '../components/Sort'

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzasCatalog />
    </div>
  )
}

export default Home
