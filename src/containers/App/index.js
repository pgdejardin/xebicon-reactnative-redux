import React from 'react';
import { View, NavigatorIOS } from 'react-native';
import SearchScreen from '../SearchScreen';
import styles from './styles';

export default function() {
  return (
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
}
