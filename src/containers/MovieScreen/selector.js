import { createSelector } from 'reselect';

/**
 * Direct selector to the movies state domain
 */
const selectMovieDomain = () => state => state.get('movie');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movies
 */

const selectMovieJS = () => createSelector(
  selectMovieDomain(),
  (substate) => substate.toJS()
);

const selectMovie = () => createSelector(
  selectMovieDomain(),
  state => state.get('movie')
);

const selectCredits = () => createSelector(
  selectMovieDomain(),
  state => state.get('credits')
);


const selectLoading = () => createSelector(
  selectMovieDomain(),
  state => state.get('loading')
);

const selectError = () => createSelector(
  selectMovieDomain(),
  state => state.get('error')
);

export default selectMovieJS;
export {
  selectMovieDomain,
  selectMovie,
  selectCredits,
  selectLoading,
  selectError,
};
