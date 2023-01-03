import React from 'react'
import './index.scss'

const TopMarketComponent = ({
  starIcon,
  circleIcon,
  mainTitle,
  description,
  topMarketText,
}) => {
  return (
    <div className="content-left">
      <span className="top-market">
        {starIcon}
        {topMarketText}
      </span>
      <h1>{mainTitle}</h1>
      <p>{description}</p>
      <span className="read-more">Read more {circleIcon}</span>
    </div>
  )
}

export default TopMarketComponent
