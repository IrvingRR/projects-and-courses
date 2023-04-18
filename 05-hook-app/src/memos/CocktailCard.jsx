const CocktailCard = ({ data, category }) => {

    const { strDrink, strDrinkThumb } = data;

  return (
    <div className="card">
        <img src={ strDrinkThumb } alt={ strDrink } className="card-image" />
        <strong>{ strDrink }</strong>
        <small>{ category }</small>
    </div>
  )
}

export default CocktailCard;