import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Feed from "../screens/Feed";
import Upload from "../screens/Upload";
import Profile from "../screens/Profile";

const HomeStack = createStackNavigator({
  Home: Feed
});

HomeStack.navigationOptions = {
  tabBarLabel: "Feed",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-paper` : "ios-paper"}
    />
  )
};

const LinksStack = createStackNavigator({
  Links: Upload
});

LinksStack.navigationOptions = {
  tabBarLabel: "Upload",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cloud-upload" : "ios-cloud-upload"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: Profile
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
