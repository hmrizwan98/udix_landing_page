import React from 'react'
import './index.scss'

const Slider = ({ sliderHeading, brandingLogoArr, sliderArrow }) => {
  console.log('sdasda', brandingLogoArr)
  return (
    <div className="slider-component">
      <h1>{sliderHeading}</h1>
      <div className="blur-box" />
      <div className="card-grid">
        {brandingLogoArr?.map(({ logo }) => (
          <div className="product-card">
            <img src={logo} alt="" />
          </div>
        ))}
      </div>
      <div className="blur-box-right" />
      <div className="slider-arrow">
        {sliderArrow}1 / 2 <span className="right-arrow">{sliderArrow}</span>
      </div>
    </div>
  )
}

export default Slider
