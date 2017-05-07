/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import store from './src/store';
import PathApp from './src/components/Index.js';

export default class socialpath extends Component {
  render() {
    return (
      <Provider store={store}>
        <PathApp />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('socialpath', () => socialpath);
