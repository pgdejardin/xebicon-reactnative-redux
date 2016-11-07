import { createSelector } from 'reselect';

/**
 * Direct selector to the movies state domain
 */
const selectMoviesDomain = () => state => state.get('movies');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movies
 */

const selectMoviesJS = () => createSelector(
  selectMoviesDomain(),
  (substate) => substate.toJS()
);

const selectMovies = () => createSelector(
  selectMoviesDomain(),
  state => state.get('dataSource')
);

const selectTotalMovies = () => createSelector(
  selectMoviesDomain(),
  state => state.get('total')
);

const selectPage = () => createSelector(
  selectMoviesDomain(),
  state => state.get('page')
);

const selectTotalPages = () => createSelector(
  selectMoviesDomain(),
  state => state.get('total_pages')
);

const selectLoading = () => createSelector(
  selectMoviesDomain(),
  state => state.get('loading')
);

const selectLoadingTail = () => createSelector(
  selectMoviesDomain(),
  state => state.get('loadingTail')
);

const selectError = () => createSelector(
  selectMoviesDomain(),
  state => state.get('error')
);

export default selectMoviesJS;
export {
  selectMoviesDomain,
  selectMovies,
  selectTotalMovies,
  selectPage,
  selectTotalPages,
  selectLoading,
  selectLoadingTail,
  selectError,
};
