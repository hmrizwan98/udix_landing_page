import React from 'react'
import './index.scss'

const ContainerWrapper = ({ className, children }) => {
  return <div className={`container-wrapper ${className}`}>{children}</div>
}

export default ContainerWrapper
