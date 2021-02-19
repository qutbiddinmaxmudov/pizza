import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, PizzaBlock, SortPopup } from "../components";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItems={(i) => console.log(i)}
          items={[
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
        <SortPopup
          items={[
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
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
