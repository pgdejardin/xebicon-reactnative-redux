import { fromJS } from 'immutable';
import {
  LOAD_MOVIE_REQUEST, LOAD_MOVIE_SUCCESS, LOAD_MOVIE_ERROR, LOAD_CREDITS_REQUEST, LOAD_CREDITS_SUCCESS,
  LOAD_CREDITS_ERROR
} from './constant';

const initialState = fromJS({
  movie: false,
  credits: false,
  loading: false,
  error: false,
});

export default function moviesReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIE_REQUEST:
      return state
        .set('movie', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_MOVIE_SUCCESS:
      return state
        .set('movie', action.movie)
        .set('loading', false);
    case LOAD_MOVIE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_CREDITS_REQUEST:
      return state
        .set('credits', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_CREDITS_SUCCESS:
      return state
        .set('credits', action.credits)
        .set('loading', false);
    case LOAD_CREDITS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}
