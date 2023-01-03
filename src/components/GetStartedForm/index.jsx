import React from 'react'
import './index.scss'
import { ReactComponent as Laptop } from 'assets/icons/pc.svg'
import Button from 'components/common/Button'
import formImg from 'assets/images/line.png'
import Input from 'components/common/Input'

const GetStartedForm = ({ title, inputArr, btnText, supportEmail }) => {
  return (
    <div className="get-started-form">
      <div className="form-content">
        <h1>{title}</h1>
        {inputArr?.map(({ name, placeholder, type }) => (
          <Input {...{ name, placeholder, type }} />
        ))}

        <Button className="fill">{btnText}</Button>
        <p>
          Support <span>{supportEmail}</span>
        </p>
      </div>
      <div className="img-section">
        <img src={formImg} alt="" />
        <Laptop />
      </div>
    </div>
  )
}

export default GetStartedForm
