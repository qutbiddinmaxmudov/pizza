import React, { useState, memo } from "react";

const Categories = memo(function ({ items, onClickItems }) {
  const [active, setActive] = useState(null);
  const onClickItem = (index) => {
    setActive(index);
    onClickItems(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={active === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={active === index ? "active" : ""}
              onClick={() => onClickItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
