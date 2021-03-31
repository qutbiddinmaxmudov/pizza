import React, { memo } from "react";
import PropTypes from "prop-types";
const Categories = memo(function ({ active, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={active === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={active === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  active: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  active: null,
  items: [],
};
export default Categories;
