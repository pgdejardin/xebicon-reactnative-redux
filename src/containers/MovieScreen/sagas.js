import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOAD_MOVIE_REQUEST, LOAD_CREDITS_REQUEST } from './constant';
import { loadMovieSuccess, loadMovieError, loadCreditsSuccess, loadCreditsError } from './actions';
import request from '../../utils/request';
import { API_URL, API_KEY } from '../../constants';

export function* fetchMovie(action) {
  const { id } = action;
  const movie = yield call(request, `${API_URL}movie/${id}?api_key=${API_KEY}`);
  if (!movie.err) {
    const { data } = movie;
    yield put(loadMovieSuccess(data));
  } else {
    yield put(loadMovieError(movie.err))
  }
}

export function* fetchCredits(action) {
  const { id } = action;
  const movie = yield call(request, `${API_URL}movie/${id}/credits?api_key=${API_KEY}`);
  if (!movie.err) {
    const { data } = movie;
    yield put(loadCreditsSuccess(data));
  } else {
    yield put(loadCreditsError(movie.err))
  }
}

export function* watchLoadMovie() {
  yield takeLatest(LOAD_MOVIE_REQUEST, fetchMovie);
}

export function* watchLoadCredits() {
  yield takeLatest(LOAD_CREDITS_REQUEST, fetchCredits);
}
