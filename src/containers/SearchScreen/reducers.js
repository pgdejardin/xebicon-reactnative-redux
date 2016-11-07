import { fromJS } from 'immutable';
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from './constant';

const initialState = fromJS({
  dataSource: false,
  total: 0,
  page: 0,
  total_pages: 0,
  loading: false,
  loadingTail: false,
  error: false,
});

export default function moviesReducers(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return state
        .set('total', 0)
        .set('page', 1)
        .set('total_pages', 1)
        .set('error', false)
        .set('loading', true)
        .set('loadingTail', false);
    case SEARCH_MOVIES_SUCCESS:
      if (action.movies.page === 1) {
        return state
          .set('dataSource', action.movies.results)
          .set('total', action.movies.total_results)
          .set('page', action.movies.page)
          .set('total_pages', action.movies.total_pages)
          .set('error', false)
          .set('loading', false)
          .set('loadingTail', false);
      }
      return state
        .set('dataSource', state.get('dataSource').concat(action.movies.results))
        .set('total', action.movies.total_results)
        .set('page', action.movies.page)
        .set('total_pages', action.movies.total_pages)
        .set('error', false)
        .set('loading', false)
        .set('loadingTail', false);
    case SEARCH_MOVIES_ERROR:
      return state
        .set('dataSource', false)
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}
