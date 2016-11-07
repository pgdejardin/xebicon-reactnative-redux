import { StyleSheet } from 'react-native';
import { IMG_URL, API_URL, API_KEY, LANG } from './constants';

var MAX_VALUE = 200;

const styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
});

export function getStyleFromScore(score, isNotPercent) {
  if (score < 0) {
    return styles.noScore;
  }
  const sub = isNotPercent ? 10 : 100;
  const normalizedScore = Math.round((score / sub) * MAX_VALUE);
  return {
    color: 'rgb(' +
    (MAX_VALUE - normalizedScore) + ', ' +
    normalizedScore + ', ' +
    0 +
    ')'
  };
}

export function getImageSource(movie) {
  if (movie && movie.poster_path) {
    const uri = `${IMG_URL}${movie.poster_path}`;
    return { uri };
  }
  return require('./assets/no-image.png');
}

export function getTextFromScore(score, isNotPercent) {
  const percent = isNotPercent ? '' : '%';
  return score > 0 ? score + percent : 'N/A';
}

export function urlForQueryAndPage(query, pageNumber) {
  if (query) {
    return (
      API_URL + 'search/movie?api_key=' + API_KEY + '&query=' +
      encodeURIComponent(query) + '&language=' + LANG + '&include_adult=false&page=' + pageNumber
    );
  } else {
    // With no query, load latest movies
    return (
      API_URL + 'movie/now_playing?api_key=' + API_KEY + '&language=' + LANG + '&include_adult=false&page=' +
      pageNumber
    );
  }
}
