import React from 'react'
import ContainerWrapper from 'components/common/ContainerWrapper'
import './index.scss'
import GetStartedForm from 'components/GetStartedForm'
import TopMarketComponent from 'components/TopMarketComponent'
import MarketingServicesComponent from 'components/MarketingServicesComponent'
import ProvideSolutions from 'components/ProvideSolutions'
import TechnologyComponent from 'components/TechnologyComponent/index'
import {
  formData,
  topMarket,
  marketingServices,
  solutionProvideData,
  technologyData,
  sliderData,
} from 'site-data/home'
import SubscribeSection from 'components/SubscribeSection'
import Slider from 'components/common/Slider'

const Home = () => {
  const { title, inputArr, btnText, supportEmail } = formData
  const { starIcon, circleIcon, mainTitle, description, topMarketText } =
    topMarket
  const { contentImage, udix, desc, heading, sliderArrow } = marketingServices
  const { mainHeading, descriptions, cardArr } = solutionProvideData
  const { contentArr, contentImg, roundArrow, check } = technologyData
  const { sliderHeading, brandingLogoArr } = sliderData
  return (
    <div className="home-page-container">
      <div className="top-market-company">
        <ContainerWrapper className="home-page-grid">
          <TopMarketComponent
            {...{ starIcon, circleIcon, mainTitle, description, topMarketText }}
          />
          <GetStartedForm {...{ title, inputArr, btnText, supportEmail }} />
        </ContainerWrapper>
      </div>
      <MarketingServicesComponent
        {...{ contentImage, udix, desc, heading, sliderArrow }}
      />
      <ProvideSolutions {...{ mainHeading, descriptions, cardArr }} />
      <TechnologyComponent {...{ contentArr, contentImg, roundArrow, check }} />
      <SubscribeSection />
      <Slider {...{ sliderHeading, brandingLogoArr, sliderArrow }} />
    </div>
  )
}

export default Home
