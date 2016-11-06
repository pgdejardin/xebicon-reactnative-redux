import React from 'react';
import { View, Text } from 'react-native';

import { getStyleFromScore, getTextFromScore } from '../../utils';

class Ratings extends React.Component {
  render() {
    const criticsScore = this.props.ratings.critics_score;
    const audienceScore = this.props.ratings.audience_score;

    return (
      <View>
        <View style={this.props.styles.rating}>
          <Text style={this.props.styles.ratingTitle}>Critics:</Text>
          <Text style={[this.props.styles.ratingValue, getStyleFromScore(criticsScore)]}>
            {getTextFromScore(criticsScore)}
          </Text>
        </View>
        <View style={this.props.styles.rating}>
          <Text style={this.props.styles.ratingTitle}>Audience:</Text>
          <Text style={[this.props.styles.ratingValue, getStyleFromScore(audienceScore)]}>
            {getTextFromScore(audienceScore)}
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
