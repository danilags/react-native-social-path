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

const PathApp = StackNavigator({
  Main: {screen: App},
  Camera: {screen: CameraApp},
  Login: {screen: LoginPage}
})

export default PathApp;
