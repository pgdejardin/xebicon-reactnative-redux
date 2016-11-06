import { StyleSheet } from 'react-native';

var MAX_VALUE = 200;

const styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
});

export function getStyleFromScore(score) {
  if (score < 0) {
    return styles.noScore;
  }

  var normalizedScore = Math.round((score / 100) * MAX_VALUE);
  return {
    color: 'rgb(' +
    (MAX_VALUE - normalizedScore) + ', ' +
    normalizedScore + ', ' +
    0 +
    ')'
  };
}

export function getImageSource(movie, kind) {
  var uri = movie && movie.posters ? movie.posters.thumbnail : null;
  if (uri && kind) {
    uri = uri.replace('tmb', kind);
  }
  return { uri };
}

export function getTextFromScore(score) {
  return score > 0 ? score + '%' : 'N/A';
}
