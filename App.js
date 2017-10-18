import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';

const App = StackNavigator({
  Main: {
    screen: MainScreen
  },
  Profile: {
    screen: ProfileScreen
  }
})
export default App;