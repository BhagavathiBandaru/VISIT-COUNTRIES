import './index.css'

const VisitedCountriesBlock = props => {
  const {visitedCountryData, onClickRemoveDataBtn} = props
  const {id, name, imageUrl} = visitedCountryData

  const onClickDelCountry = () => {
    onClickRemoveDataBtn(id)
  }

  return (
    <li className="country-list-item">
      <img src={imageUrl} alt="thumbnail" className="imageElement" />
      <div className="country-data-container">
        <p className="name">{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={onClickDelCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesBlock
