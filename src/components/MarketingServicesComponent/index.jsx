import React from 'react'
import './index.scss'
import UsableRow from 'components/common/UsableRow'

const MarketingServicesComponent = ({
  contentImage,
  udix,
  desc,
  heading,
  sliderArrow,
}) => {
  return (
    <div className="marketing-services-component">
      <UsableRow image={contentImage} className="pseduelement">
        <div className="marketing-services">
          {udix}
          <h1>{heading}</h1>
          <p>{desc}</p>
          <div className="slider-arrow">
            {sliderArrow}1 / 2{' '}
            <span className="right-arrow">{sliderArrow}</span>
          </div>
        </div>
      </UsableRow>
    </div>
  )
}

export default MarketingServicesComponent
