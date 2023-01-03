import UsableRow from 'components/common/UsableRow'
import React from 'react'
import './index.scss'

const TechnologyComponent = ({ contentArr, contentImg, roundArrow, check }) => {
  return (
    <div className="technology-component">
      <UsableRow image={contentImg}>
        <div className="marketing-services">
          {contentArr?.map(({ heading, desc }) => (
            <>
              <h1>{heading}</h1>
              <p>{desc}</p>
            </>
          ))}

          <div className="slider-arrow">
            {check} {roundArrow}
          </div>
        </div>
      </UsableRow>
    </div>
  )
}

export default TechnologyComponent
