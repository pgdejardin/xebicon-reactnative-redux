import React from 'react';
import { View, Text } from 'react-native';

class NoMovies extends React.Component {
  render() {
    let text = '';
    if (this.props.filter) {
      text = `No results for "${this.props.filter}"`;
    } else if (!this.props.isLoading) {
      // If we're looking at the latest movies, aren't currently loading, and
      // still have no results, show a message
      text = 'No movies found';
    }

    return (
      <View style={[this.props.styles.container, this.props.styles.centerText]}>
        <Text style={this.props.styles.noMoviesText}>{text}</Text>
      </View>
    );
  }
}

NoMovies.propTypes = {
  styles: React.PropTypes.object,
  filter: React.PropTypes.string,
};

export default NoMovies;
