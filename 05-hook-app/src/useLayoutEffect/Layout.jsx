import { Fragment } from 'react'
import { useCounter, useFetch } from '../hooks';
import {LoadingCocktail, Cocktail} from '../examples';

const Layout = () => {

    const { counter, incrementCounter } = useCounter(11007);
    
    const { data, isLoading, error } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ counter }`);
    const { strDrink, strInstructions } = !!data && data[0];

  return (
    <Fragment>
        <h2>Cocktails</h2>
        <hr />
        {
            isLoading 
                ?   <LoadingCocktail />
                :   <Cocktail strDrink={ strDrink } strInstructions={ strInstructions }/>
        }
        
        <button className="btn btn-primary" onClick={ () => incrementCounter() }>Next cocktail</button>
    </Fragment>
  )
}

export default Layout;