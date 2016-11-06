import React from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { getStyleFromScore, getImageSource, getTextFromScore } from '../../utils';

import styles from './styles';

class MovieCell extends React.Component {
  render() {
    const criticsScore = this.props.movie.ratings.critics_score;
    const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.row}>
            <Image
              source={getImageSource(this.props.movie, 'det')}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {this.props.movie.title}
              </Text>
              <Text style={styles.movieYear} numberOfLines={1}>
                {this.props.movie.year}
                {' '}&bull;{' '}
                <Text style={getStyleFromScore(criticsScore)}>
                  Critics {getTextFromScore(criticsScore)}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableElement>
      </View>
    );
  }
}

MovieCell.propTypes = {
  movie: React.PropTypes.object,
  onHighlight: React.PropTypes.any,
  onUnhighlight: React.PropTypes.any,
};

export default MovieCell;
