import React, { useState } from 'react'
import Button from 'components/common/Button'
import ContainerWrapper from 'components/common/ContainerWrapper'
import './index.scss'
import { ReactComponent as Burger } from 'assets/icons/navbar.svg'
import { useWindowSize } from 'utils/helper'

const Header = ({ logo, links, signIn, signUp }) => {
  const { width } = useWindowSize()
  const [isShow, setIsShow] = useState(false)
  return (
    <ContainerWrapper className="header-grid">
      {width < 1024 ? (
        <>
          <div className="mobile-header">
            {logo}
            <Burger className="burger" onClick={() => setIsShow(!isShow)} />
          </div>
          {isShow && (
            <div className="nav-drop">
              <div className="logo-links">
                <ul>
                  {links?.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="logo-links">
            {logo}
            <ul>
              {links?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="btn-section">
            <Button className="transparent">{signIn}</Button>
            <Button>{signUp}</Button>
          </div>
        </>
      )}
    </ContainerWrapper>
  )
}

export default Header
