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

import PathApp from './src/components/Index.js'

export default class socialpath extends Component {
  render() {
    return (
      <PathApp />
    );
  }
}



AppRegistry.registerComponent('socialpath', () => socialpath);
