import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
    
    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemon);

    console.log('Pokemon App:', pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());   
    }, []);

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False' }</span>

        <ul>
            {
                pokemons.length > 0 && pokemons.map((pokemon, index) => <li key={`${pokemon.name}-${index}`}>{pokemon.name}</li>)
            }
        </ul>
        <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  )
}
