import Button from 'components/common/Button'
import React from 'react'
import './index.scss'
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg'
import { ReactComponent as Youtube } from 'assets/icons/youtube.svg'
import { ReactComponent as LinkedIn } from 'assets/icons/linkedIn.svg'
import { ReactComponent as Gmail } from 'assets/icons/gmail.svg'
import { ReactComponent as Skype } from 'assets/icons/skype.svg'

const Footer = ({ logo }) => {
  return (
    <div className="footer-component">
      <div className="logo-content">
        {logo}
        <p>
          udix is a market-leading provider of digital marketing services, using
          proprietary tools and methodologies to generate high-value engagement
          for our customers.
        </p>
      </div>
      <div className="links-socialmedia">
        <div className="flex">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Product</li>
            <li>Content</li>
          </ul>
          <Button className="transparent">Sign IN</Button>
          <Button>SignUp</Button>
        </div>
        <div className="social-media-link">
          <ul>
            <li>
              <Facebook />
            </li>
            <li>
              <Youtube />
            </li>
            <li>
              <LinkedIn />
            </li>
            <li>
              <Gmail />
            </li>
            <li>
              <Skype />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
