import React from 'react'
import './index.scss'

const BusinessCard = ({
  productTitle,
  icon,
  productDescription,
  arrow,
  active,
}) => {
  return (
    <div className={`business-card ${active}`}>
      <div className="icon-box">{icon}</div>
      <h3>{productTitle}</h3>
      <p>{productDescription}</p>
      <div>{arrow}</div>
    </div>
  )
}

export default BusinessCard
