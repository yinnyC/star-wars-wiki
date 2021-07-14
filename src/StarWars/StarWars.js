import { useSelector, useDispatch } from 'react-redux';
import { setNumber, getPeople } from '../actions';
import SearchResult from './SearchResult/SearchResult'
import FavoritedCharacter from './FavoritedCharacter/FavoritedCharacter'
import './StarWars.css';

function StarWars() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.StarWarsData);
  const { number, character, favorites } = form;
  const FavoriteList = favorites.map((favorite) => <FavoritedCharacter key={favorite.name} {...favorite}/>)
  return (
    <div className="StarWars">
      <div className="search">
        <form>
          <input type="number" value={number} onChange={(e) => {
            const num = parseInt(e.target.value)
            if(1<=num && num<=83 && num !== 17) {
              dispatch(setNumber(e.target.value));
            }
          }}/>
          <button type="button" onClick={(e)=> {
            e.preventDefault();
            dispatch(getPeople(number));
          }}>Search</button>
        </form>
        { character.name ? <SearchResult {...character}/>: "" }
      </div>
      <div className="Favorite">
        {FavoriteList}
      </div>
    </div>
  )
}

export default StarWars;