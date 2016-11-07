import React from 'react';
import { View, Text } from 'react-native';

import { getStyleFromScore, getTextFromScore } from '../../utils';

class Ratings extends React.Component {
  render() {
    const { ratings } = this.props;
    const criticsScore = Math.round(ratings.popularity);
    const audienceScore = ratings.vote_average;

    return (
      <View>
        <View style={this.props.styles.rating}>
          <Text style={this.props.styles.ratingTitle}>Popularity:</Text>
          <Text style={[this.props.styles.ratingValue, getStyleFromScore(criticsScore)]}>
            {getTextFromScore(criticsScore)}
          </Text>
        </View>
        <View style={this.props.styles.rating}>
          <Text style={this.props.styles.ratingTitle}>Vote Average:</Text>
          <Text style={[this.props.styles.ratingValue, getStyleFromScore(audienceScore, true)]}>
            {getTextFromScore(audienceScore, true)}
          </Text>
        </View>
      </View>
    );
  }
}

Ratings.propTypes = {
  styles: React.PropTypes.object.isRequired,
  ratings: React.PropTypes.object.isRequired,
};

export default Ratings;
