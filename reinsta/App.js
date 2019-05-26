import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import feed from './src/screens/Feed.js';
import profile from './src/screens/Profile.js';
import upload from './src/screens/Upload.js';

const AppNavigator = createStackNavigator({
  Feed: {
    screen: feed,
    navigationOptions: {
      header: null
    }
  },
  Upload: {
    screen: upload,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {
    screen: profile,
    navigationOptions: {
      header: null,
    }
  },

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
