import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { HeroeCard } from "../components/HeroeCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
   
  const { q = '' } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q});
  const heroes = getHeroesByName(q);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label='form'>
            <input type="text" className="form-control" placeholder="Search a hero" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange}/>
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0)
              && <div className="alert alert-danger"> No hero with <b>{q}</b> </div>
          }
          
          {
            heroes.map(heroe => <HeroeCard key={heroe.id} heroe={heroe}/>)
          }
        </div>
      </div>
    </>
  )
}
