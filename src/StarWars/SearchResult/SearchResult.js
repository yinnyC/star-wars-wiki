import './SearchResult.css';
import { saveFavorite } from '../../actions';
import { useDispatch } from 'react-redux';
function SearchResult(props) {
  const { name, eye_color, hair_color, height, mass } = props;
  const dispatch = useDispatch();
  return(
    <div className="SearchResult">
      <h3>{name}</h3>
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <button type="button" onClick={(e)=>{
        e.preventDefault();
        dispatch(saveFavorite())
      }}>Save</button>
    </div>
  )
}

export default SearchResult;
