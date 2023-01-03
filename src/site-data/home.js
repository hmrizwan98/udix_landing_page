import React from 'react'
import { ReactComponent as Start } from 'assets/icons/star.svg'
import { ReactComponent as CircleArrow } from 'assets/icons/circle-arrow.svg'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as SliderArrow } from 'assets/icons/sliderArrow.svg'
import marketingImage from 'assets/images/image.png'
import { ReactComponent as CRMProduct } from 'assets/icons/crm-product.svg'
import { ReactComponent as WebServices } from 'assets/icons/web-services.svg'
import { ReactComponent as MobileApp } from 'assets/icons/smartphone.svg'
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg'
import contentImage from 'assets/images/technology.png'
import Figma from 'assets/icons/figma.svg'
import Dribble from 'assets/icons/dribble.svg'
import Sketch from 'assets/icons/sketch.svg'
import Behance from 'assets/icons/behance.svg'
import Principle from 'assets/icons/principle.svg'
// import { ReactComponent as Procreate } from 'assets/icons/procreate.svg'
import pro from 'assets/icons/procreate.svg'

const formData = {
  title: 'Get started now',
  inputArr: [
    {
      name: 'name',
      placeholder: 'Name',
      type: 'text',
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
    },
    {
      name: 'phoneNumber',
      placeholder: 'Phone Number',
      type: 'numbet',
    },
    {
      name: 'company',
      placeholder: 'Company Name',
      type: 'text',
    },
  ],
  btnText: 'Sign up',
  supportEmail: 'help@udix.com',
}

const topMarket = {
  topMarketText: 'Top market company',
  mainTitle: 'Focus on the work that matters',
  description:
    'udix is the world’s first smart workspace. We bring all your team’s content together while letting you use the tools you love.',
  readMore: 'Read more',
  circleIcon: <CircleArrow />,
  starIcon: <Start />,
}

const marketingServices = {
  contentImage: marketingImage,
  udix: <Logo />,
  heading: 'is a leading provider of digital marketing services',
  desc: 'Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.',
  sliderArrow: <SliderArrow />,
}

const solutionProvideData = {
  mainHeading: 'Solutions that will change your business forever',
  descriptions:
    'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts.',
  cardArr: [
    {
      icon: <CRMProduct />,
      productTitle: 'CRM Product',
      productDescription: 'Some networks believe that by only offering.',
      arrow: <Arrow />,
    },
    {
      icon: <WebServices />,
      productTitle: 'Web Services',
      productDescription: 'Some networks believe that by only offering.',
      arrow: <Arrow />,
      active: 'active',
    },
    {
      icon: <MobileApp />,
      productTitle: 'Mobile App',
      productDescription: 'Some networks believe that by only offering.',
      arrow: <Arrow />,
    },
  ],
}

const technologyData = {
  contentImg: contentImage,
  contentArr: [
    {
      heading: 'Creativity & Technology',
      desc: 'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results',
    },
    {
      heading: 'Defines our true value',
      desc: 'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech.',
    },
  ],
  roundArrow: <CircleArrow />,
  check: 'Check our solutions',
}

const sliderData = {
  sliderHeading: 'Working with a diverse global customer base',
  brandingLogoArr: [
    { logo: pro },
    { logo: Figma },
    { logo: Dribble },
    { logo: Sketch },
    { logo: Behance },
    { logo: Principle },
  ],
}

export {
  formData,
  topMarket,
  marketingServices,
  solutionProvideData,
  technologyData,
  sliderData,
}
