import React from 'react'
import './index.scss'

const Input = ({ name, placeholder, type, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`${className}`}
    />
  )
}

export default Input
