/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from './src/store';
import App from './src/containers/App';

const initialState = fromJS({});
const store = configureStore(initialState);

const Movies = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('myXebiconSlot', () => Movies);
