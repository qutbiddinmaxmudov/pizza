import { React, useState } from "react";

function Categories({ items }) {
  const [active, setActive] = useState(0);
  const onClickItem = (index) => setActive(index);
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
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
}

export default Categories;
