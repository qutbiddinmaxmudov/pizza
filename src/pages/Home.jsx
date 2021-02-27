import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { setCategory } from "../redux/actions/filters";
import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";

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
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  console.log(isLoaded);
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
        {isLoaded
          ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array(8).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
