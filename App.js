/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator ,createSwitchNavigator} from "react-navigation";
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const AuthStack = createStackNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen,
    navigationOptions: () => ({
      title:null,
      headerBackTitle: null,
      headerTransparent: true,  
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title:'Login',
      headerTransparent: false,  
    }),
  },
  Register:{
    screen:RegisterScreen,
    navigationOptions: () => ({
      title:'Register',
      headerTransparent: false,  
    }),
  }
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HOME",
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: "SETTINGS",
    }
  }
});


const SwitchNavigator = createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    Auth:AuthStack,
    App:AppTabNavigator
})

export default createAppContainer(SwitchNavigator);