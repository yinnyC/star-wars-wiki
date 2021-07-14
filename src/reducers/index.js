import { combineReducers } from 'redux';

import StarWarsDataReducer from './StarWarsDataReducer';

export default combineReducers({
  StarWarsData: StarWarsDataReducer,
});
