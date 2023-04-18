import { Fragment, useState } from 'react'
import { LoadingCocktail } from '../examples';
import { useCounter, useFetch } from '../hooks';
import CocktailsList from './CocktailsList';
import SelectCategories from './SelectCategories';

const MemoHookPractice = () => {

    const [category, setCategory] = useState('Ordinary Drink');
    const { data, isLoading, error } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${ category }`);
    const { counter, incrementCounter } = useCounter();

    const onChangeCategory = (category) => {
        setCategory(category);
    }

  return (
    <Fragment>
        <h1>Cocktails</h1>
        <h6>{ counter }</h6>
        <button className="btn btn-danger" onClick={ () => incrementCounter() }>+1</button>
        <hr />
        <SelectCategories onChangeCategory={ onChangeCategory }/>
        {
            isLoading
            ? <LoadingCocktail/>
            : <CocktailsList cocktails={ data.drinks }/>
        }
    </Fragment>
  )
}

export default MemoHookPractice;