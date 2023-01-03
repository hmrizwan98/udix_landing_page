import React from 'react'
import './index.scss'

const Button = ({ children, className }) => {
  return <button className={`${className}`}>{children}</button>
}

export default Button
