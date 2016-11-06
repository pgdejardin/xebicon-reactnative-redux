import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import Ratings from '../../components/Ratings';
import Cast from '../../components/Cast';
import { getImageSource } from '../../utils';

import styles from './styles';

class MovieScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            source={getImageSource(this.props.movie, 'det')}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{this.props.movie.title}</Text>
            <Text>{this.props.movie.year}</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                {this.props.movie.mpaa_rating}
              </Text>
            </View>
            <Ratings ratings={this.props.movie.ratings} styles={styles} />
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          {this.props.movie.synopsis}
        </Text>
        <View style={styles.separator} />
        <Cast actors={this.props.movie.abridged_cast} styles={styles} />
      </ScrollView>
    );
  }
}

MovieScreen.propTypes = {
  movie: React.PropTypes.object.isRequired,
};

export default MovieScreen;
