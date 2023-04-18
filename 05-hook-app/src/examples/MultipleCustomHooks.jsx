import { Fragment } from 'react'
import { useCounter, useFetch } from '../hooks';
import {LoadingCocktail, Cocktail} from './';

const MultipleCustomHooks = () => {

    const { counter, incrementCounter } = useCounter(11007);
    
    const { data, isLoading, error } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ counter }`);
    const { strDrink, strInstructions } = !!data && data.drinks[0];

    console.log(!!data && data.drinks)

  return (
    <Fragment>
        <h2>Cocktails</h2>
        <hr />
        {
            isLoading 
                ?   <LoadingCocktail />
                :   <Cocktail strDrink={ strDrink } strInstructions={ strInstructions }/>
        }
        
        <button className="btn btn-primary" disabled={ isLoading } onClick={ () => incrementCounter() }>Next cocktail</button>
    </Fragment>
  )
}

export default MultipleCustomHooks;