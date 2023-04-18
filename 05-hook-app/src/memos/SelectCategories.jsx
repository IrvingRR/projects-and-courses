import { useFetch } from '../hooks'

const SelectCategories = ({ onChangeCategory }) => {

    const { data } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);    

  return (
    <select name="category" id="" className='form-select mb-3' onChange={ (e) => onChangeCategory(e.target.value) }>
        {   
            !!data && data.drinks.map((drink, index) => <option key={index} value={ drink.strCategory }>{ drink.strCategory }</option>)
        }

    </select>
  )
}

export default SelectCategories