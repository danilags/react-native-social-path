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
import RegisterUser from './LoginUser/RegisterUser.js';
import ReadNews from './NewsTimeline';

const PathApp = StackNavigator({
  Main: {screen: App},
  Camera: {screen: CameraApp},
  Login: {screen: LoginPage},
  Register: {screen: RegisterUser},
  ReadNews: {screen: ReadNews}
})

export default PathApp;
