import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


import { StackNavigator } from 'react-navigation'

import App from './App';
import CameraApp from './Camera';

const PathApp = StackNavigator({
  Main: {screen: App},
  Camera: {screen: CameraApp}
})

export default PathApp;
