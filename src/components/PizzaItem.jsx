import React, { useState } from 'react'
import clx from 'classnames'
import Button from './Button'

const sizes = [26, 30, 40]
const types = ['тонкое', 'традиционное']

const PizzaItem = ({ item, addPizza, cartItems }) => {
  const [selectedSize, setselectedSize] = useState(item.sizes[0])
  const [selectedType, setselectedType] = useState(item.types[0])

  const pizzaId = `${item.id}-${selectedSize}-${selectedType}`
  const pizzaCount = cartItems[pizzaId]?.count

  const handleAddPizza = () => {
    const { name, id, imageUrl, price } = item
    const pizza = {
      id,
      name,
      imageUrl,
      price,
      size: selectedSize,
      type: selectedType,
    }
    addPizza(pizzaId, pizza)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, i) => (
            <li
              onClick={() => setselectedType(i)}
              className={clx({
                active: i === selectedType,
                disabled: !item.types.includes(i),
              })}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              onClick={() => setselectedSize(size)}
              key={size}
              className={clx({
                active: size === selectedSize,
                disabled: !item.sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {item.price} ₽</div>
        <Button classes="button--outline button--add" onClick={handleAddPizza}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizzaCount && <i>{pizzaCount}</i>}
        </Button>
      </div>
    </div>
  )
}

export default PizzaItem
