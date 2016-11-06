/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, View, NavigatorIOS, StyleSheet } from 'react-native';

import SearchScreen from './src/containers/SearchScreen';

const App = () => (
  <View style={styles.container}>
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Movies',
        component: SearchScreen,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('myXebiconSlot', () => App);
