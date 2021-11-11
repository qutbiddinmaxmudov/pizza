import React from 'react'

const Button = ({ children, classes, to, Component = 'div', onClick }) => {
  return (
    <Component onClick={onClick} to={to} className={`button ${classes}`}>
      {children}
    </Component>
  )
}

export default Button
