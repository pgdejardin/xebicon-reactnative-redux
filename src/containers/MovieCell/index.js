import React from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import moment from 'moment';

import { getStyleFromScore, getImageSource, getTextFromScore } from '../../utils';

import styles from './styles';

class MovieCell extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      release_date: moment(this.props.movie.release_date),
    }
  }
  
  render() {
    const { movie } = this.props;
    const criticsScore = Math.round(movie.popularity);
    const year = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A';
    const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;
    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.row}>
            <Image
              source={getImageSource(movie)}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {movie.title}
              </Text>
              <Text style={styles.movieYear} numberOfLines={1}>
                {year}
                {' '}&bull;{' '}
                <Text style={getStyleFromScore(criticsScore)}>
                  {getTextFromScore(criticsScore)}
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
