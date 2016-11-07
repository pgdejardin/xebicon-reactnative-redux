import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from './constant';

export function searchMovies(query, page) {
  return {
    type: SEARCH_MOVIES_REQUEST,
    query,
    page,
  }
}

export function searchMoviesSuccess(movies) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    movies
  }
}

export function searchMoviesError(error) {
  return {
    type: SEARCH_MOVIES_ERROR,
    error,
  }
}
