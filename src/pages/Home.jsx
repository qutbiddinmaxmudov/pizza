import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { setCategory, setSortBy } from "../redux/actions/filters";
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
  const { category, sortBy } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );
  
  const onSelectSortType = useCallback(
    (name) => dispatch(setSortBy(name)),
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          active={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array(8)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
