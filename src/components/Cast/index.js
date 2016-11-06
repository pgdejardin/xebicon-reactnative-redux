import React from 'react';
import { View, Text } from 'react-native';

class Cast extends React.Component {
  render() {
    if (!this.props.actors) {
      return null;
    }

    return (
      <View>
        <Text style={this.props.styles.castTitle}>Actors</Text>
        {this.props.actors.map(actor =>
          <Text key={actor.name} style={this.props.styles.castActor}>
            &bull; {actor.name}
          </Text>
        )}
      </View>
    );
  }
}

Cast.propTypes = {
  actors: React.PropTypes.array,
  styles: React.PropTypes.object.isRequired,
};

export default Cast;
