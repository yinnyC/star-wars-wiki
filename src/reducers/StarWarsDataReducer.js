import _ from 'underscore';
import { defaultState } from '../utils';
import { SET_NUMBER, GET_PEOPLE, SAVE_FAVORITE } from '../actions'
const StarWarsDataReducer = (state = defaultState(), action) => {
  const { number, character, favorites } = state;
  switch (action.type) {
    case GET_PEOPLE: {
      const { json } = action.payload;
      const { name, eye_color, hair_color, height, mass, homeworld, films} = json;
      return {
        ...state,
        character: {
          name, eye_color, hair_color, height, mass, homeworld, films,
        }
      };
    }
    case SET_NUMBER: 
      return { ...state, number:action.payload.number }
    
    case SAVE_FAVORITE: {
      const new_favorites = favorites
      if (_.findWhere(new_favorites, character) == null) {
        new_favorites.push(character);
    }
      return { ...state, favorites: new_favorites }
    }
    default:
      return state;
  }
  
} 

export default StarWarsDataReducer;