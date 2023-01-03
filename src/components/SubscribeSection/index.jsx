import Button from 'components/common/Button'
import ContainerWrapper from 'components/common/ContainerWrapper'
import Input from 'components/common/Input'
import React from 'react'
import './index.scss'

const SubscribeSection = () => {
  return (
    <ContainerWrapper>
      <div className="subscribe-section">
        <h1>Working with us are the path to success</h1>
        <p>
          Get the Onboarding Package for Free and enjoy our platform  with the
          support of our professional onboarding team.
        </p>
        <div className="subscribe-box">
          <Input placeholder="Name" />
          <Button className="subscribe">Subscribe</Button>
        </div>
        <p>
          WARNING: once you join udix you <br />
          will lose the need for any other landing page
        </p>
        <span className="top-left"></span>
        <span className="bottom-right"></span>
      </div>
    </ContainerWrapper>
  )
}

export default SubscribeSection
