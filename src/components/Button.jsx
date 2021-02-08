import React from "react";
import classNames from "classnames";

export default ({className, children}, ...props) => (
  <button
    className={classNames("button", className, {
      "button--outline": props.outline,
    })}
  >
    {children}
  </button>
);
