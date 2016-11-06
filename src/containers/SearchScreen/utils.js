import { API_URL, API_KEYS } from './constant';

export function urlForQueryAndPage (query, pageNumber, queryNumber) {
  var apiKey = API_KEYS[queryNumber % API_KEYS.length];
  if (query) {
    return (
      API_URL + 'movies.json?apikey=' + apiKey + '&q=' +
      encodeURIComponent(query) + '&page_limit=20&page=' + pageNumber
    );
  } else {
    // With no query, load latest movies
    return (
      API_URL + 'lists/movies/in_theaters.json?apikey=' + apiKey +
      '&page_limit=20&page=' + pageNumber
    );
  }
}
