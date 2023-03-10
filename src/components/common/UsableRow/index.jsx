import ContainerWrapper from '../ContainerWrapper'
import './index.scss'

const UsableRow = ({
  children,
  customClass,
  gridGapClass,
  imageClass,
  image,
  className,
}) => {
  return (
    <ContainerWrapper className={`${className}`}>
      <div className={`iAmUseableRow ${gridGapClass}`}>
        <div className="wrapperImage">
          <img src={image} alt="" className={`${imageClass}`} />
        </div>
        <div className={`content ${customClass}`}>{children}</div>
      </div>
    </ContainerWrapper>
  )
}

export default UsableRow
