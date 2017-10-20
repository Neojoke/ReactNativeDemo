import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import ScrollViewDemo from './components/ScrollViewDemo'
import FetchDemo from './components/FetchDemo'
const App = StackNavigator({
  Main: {
    screen: MainScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  ScrollView: {
    screen: ScrollViewDemo
  },
  Fetch: {
    screen: FetchDemo
  }
})
export default App;