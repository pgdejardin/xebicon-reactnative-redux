import { fork } from 'redux-saga/effects';
import { watchSearchMovies } from './containers/SearchScreen/sagas';
import { watchLoadMovie, watchLoadCredits } from './containers/MovieScreen/sagas';

export default function* root() {
  yield [
    fork(watchSearchMovies),
    fork(watchLoadMovie),
    fork(watchLoadCredits),
  ];
}
