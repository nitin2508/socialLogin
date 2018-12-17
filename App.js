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
import Icon from 'react-native-vector-icons/Ionicons';

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

const homeStack = createStackNavigator({
  HomeScreen:{
    screen:HomeScreen,
    // navigationOptions: () => ({
    //   title:null,
    //   headerBackTitle: null,
    //   headerTransparent: true,  
    // }),
  },
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: homeStack,
  Setting: {
    screen: SettingScreen,
  },
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'HomeScreen') {
        iconName = `md-home`;
      } else if (routeName === 'Setting') {
        iconName = `md-cog`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
       return <Icon name={iconName} size={30} color={tintColor} />;
      //return  <Icon size={30} name="md-trash"/>
    },
     tabBarOptions: {
      inactiveTintColor: 'grey',
      showLabel:false
    },
    tabBarLabel:'pskjdskd',
    header: { visible: true }
  })
});


const SwitchNavigator = createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    Auth:AuthStack,
    App:AppTabNavigator
})

export default createAppContainer(SwitchNavigator);