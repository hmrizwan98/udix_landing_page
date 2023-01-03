import React from 'react'
import './index.scss'
import ContainerWrapper from 'components/common/ContainerWrapper'
import BusinessCard from 'components/BusinessCard'

const ProvideSolutions = ({ mainHeading, descriptions, cardArr }) => {
  return (
    <ContainerWrapper className="solution-provide">
      <div className="we-provide-solution">
        <h1>{mainHeading}</h1>
        <p>{descriptions}</p>
      </div>
      <div className="card-grid">
        {cardArr?.map(
          ({ productTitle, icon, productDescription, arrow, active }) => (
            <BusinessCard
              {...{ productTitle, icon, productDescription, arrow, active }}
            />
          ),
        )}
      </div>
    </ContainerWrapper>
  )
}

export default ProvideSolutions
