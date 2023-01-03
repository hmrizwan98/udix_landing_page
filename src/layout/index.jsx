import Header from 'components/Header'
import React from 'react'
import Home from 'screens/Home'
import './index.scss'
import { headerData } from 'site-data/header'
import Footer from 'components/Footer'

const Layout = () => {
  const { logo, links, signIn, signUp } = headerData
  return (
    <div className="layout-container">
      <div className="header">
        <Header {...{ logo, links, signIn, signUp }} />
      </div>
      <div className="content-container">
        <Home />
      </div>
      <div className="footer">
        <Footer {...{ logo }} />
      </div>
    </div>
  )
}

export default Layout
