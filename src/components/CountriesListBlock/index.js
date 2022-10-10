import {ButtonEle} from './styledComponents'

import './index.css'

const CountriesListBlock = props => {
  const {countryData, onClickToVisitCountryBtn} = props
  const {id, name, isVisited} = countryData
  const btnText = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickToVisitCountryBtn(id)
  }

  return (
    <li className="each-list-element">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="textEle">{btnText}</p>
      ) : (
        <ButtonEle type="button" className="btn" onClick={onClickButton}>
          {btnText}
        </ButtonEle>
      )}
    </li>
  )
}

export default CountriesListBlock
