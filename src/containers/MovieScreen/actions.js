import {
  LOAD_MOVIE_REQUEST, LOAD_MOVIE_SUCCESS, LOAD_MOVIE_ERROR, LOAD_CREDITS_REQUEST, LOAD_CREDITS_SUCCESS,
  LOAD_CREDITS_ERROR
} from './constant';

export function loadMovie(id) {
  return {
    type: LOAD_MOVIE_REQUEST,
    id,
  }
}

export function loadMovieSuccess(movie) {
  return {
    type: LOAD_MOVIE_SUCCESS,
    movie,
  }
}

export function loadMovieError(error) {
  return {
    type: LOAD_MOVIE_ERROR,
    error,
  }
}

export function loadCredits(id) {
  return {
    type: LOAD_CREDITS_REQUEST,
    id,
  }
}

export function loadCreditsSuccess(credits) {
  return {
    type: LOAD_CREDITS_SUCCESS,
    credits,
  }
}

export function loadCreditsError(error) {
  return {
    type: LOAD_CREDITS_ERROR,
    error,
  }
}
