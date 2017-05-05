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

import App from './src/components/App.js'

export default class socialpath extends Component {
  render() {
    return (
      <App />
    );
  }
}

// AIzaSyAGm77SnYLjcu3em4CoYmqurCCrgyIO-x4


AppRegistry.registerComponent('socialpath', () => socialpath);
