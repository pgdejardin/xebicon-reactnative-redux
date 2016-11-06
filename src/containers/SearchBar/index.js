import React from 'react';
import { ActivityIndicator, TextInput, View } from 'react-native';

import styles from './styles';

class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChange={this.props.onSearchChange}
          placeholder="Search a movie..."
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={styles.spinner}
        />
      </View>
    );
  }
}

export default SearchBar;
