import React from 'react';
import { View, Text } from 'react-native';

class Cast extends React.Component {
  render() {
    if (!this.props.actors) {
      return null;
    }
    const { cast } = this.props.actors;
    return (
      <View>
        <Text style={this.props.styles.castTitle}>Actors</Text>
        {cast.map(actor =>
          <Text key={actor.name} style={this.props.styles.castActor}>
            &bull; {actor.name}
          </Text>
        )}
      </View>
    );
  }
}

Cast.propTypes = {
  actors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
  styles: React.PropTypes.object.isRequired,
};

export default Cast;
