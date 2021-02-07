import React from "react";
import classNames from "classnames";

export default (props) => (
  <button
    className={classNames("button", {
      "button--outline": props.outline,
    })}
  >
    {props.children}
  </button>
);
