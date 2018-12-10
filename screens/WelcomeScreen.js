
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import HomeCarosel from '../components/login/HomeCarosel';
import GoogleLogin from '../components/GoogleLogin';

export default class WelcomeScreen extends Component {

signOut = ()=>{
  this.props.navigation.navigate('Register');
}
  render() {
    return (
      <View style={styles.container}>
      
      <Image
        style={{width: 60, height: 60}}
        source={{uri: 'https://images.upwardly.in/logos/upwardly_emblem_green.png'}}
        />
      <HomeCarosel/>
      <GoogleLogin/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding:90
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});