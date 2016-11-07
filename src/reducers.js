import { combineReducers } from 'redux-immutable';
import movies from './containers/SearchScreen/reducers';
import movie from './containers/MovieScreen/reducers';

export default combineReducers({
  movies,
  movie,
});

