import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SEARCH_MOVIES_REQUEST } from './constant';
import { urlForQueryAndPage } from '../../utils';
import { searchMoviesSuccess, searchMoviesError } from './actions';
import request from '../../utils/request';

export function* fetchMovies(action) {
  const { query, page } = action;
  const movies = yield call(request, urlForQueryAndPage(query, page));
  if (!movies.err) {
    const { data } = movies;
    yield put(searchMoviesSuccess(data, 1));
  } else {
    yield put(searchMoviesError(movies.err))
  }
}

export function* watchSearchMovies() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, fetchMovies);
}
