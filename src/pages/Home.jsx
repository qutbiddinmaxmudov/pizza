import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";
import { Categories, PizzaBlock, SortPopup } from "../components";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  {
    name: "популярности",
    type: "popular",
  },
  {
    name: "цене",
    type: "price",
  },
  {
    name: "алфавиту",
    type: "alphabet",
  },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);

  const onSelectCategory = useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItems={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
