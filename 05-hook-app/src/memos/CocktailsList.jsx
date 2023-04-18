import { useMemo } from 'react'
import CocktailCard from './CocktailCard';

const CocktailsList = ({ cocktails = [] }) => {

    const categoryMemo = useMemo(() => console.log(cocktails.length), [cocktails]);
    // console.log(cocktails.length);

  return (
    <div className="cards">
        {
            cocktails.map(cocktail => <CocktailCard key={ cocktail.idDrink } data={ cocktail }/>)
        }
    </div>
  )
}

export default CocktailsList;