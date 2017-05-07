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
import LoginPage from './LoginUser/Index.js';
import ReadNews from './NewsTimeline';

const PathApp = StackNavigator({
  Main: {screen: App},
  Camera: {screen: CameraApp},
  ReadNews: {screen: ReadNews}
})

export default PathApp;
