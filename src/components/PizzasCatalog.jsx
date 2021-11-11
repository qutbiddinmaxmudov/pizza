import { observer } from 'mobx-react-lite'
import React from 'react'
import store from '../store'
import PizzaItem from './PizzaItem'
import PizzaItemsLoader from './PizzaItemLoader'

const PizzasCatalog = () => {
  const { items, loading, addPizza, cartItems } = store
  return (
    <div className="content__items">
      {loading
        ? new Array(4).fill(0).map((_, i) => <PizzaItemsLoader key={i} />)
        : items.map((item) => <PizzaItem addPizza={addPizza} item={item} key={item.id} cartItems={cartItems} />)}
    </div>
  )
}

export default observer(PizzasCatalog)
