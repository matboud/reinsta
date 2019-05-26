import React, { Component } from 'react';
import {View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Feed from './src/screens/Feed';
import Upload from './src/screens/Upload';
import Profile from './src/screens/Profile';


const AppNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  Upload: {
    screen: Upload,
    navigationOptions: {
      header: null,
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      header: null,
    }
  },

});

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {

  render() {
    return (
      <View>
          <AppContainer />
      </View>
    );
  }
}



export default App;
