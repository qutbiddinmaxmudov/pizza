import React from "react";
import classNames from "classnames";

function Button({ className, children }, ...props) {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": props.outline,
      })}
    >
      {children}
    </button>
  );
}
export default Button;
