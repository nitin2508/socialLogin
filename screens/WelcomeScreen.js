
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class WelcomeScreen extends Component {
  componentDidMount(){
    try {
        GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }).then(()=>{
            console.log('services')
        })
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '600105741744-55vbuipkrvtesklca27o29c62coctnv0.apps.googleusercontent.com',
          });
    // google services are available
    } catch (err) {
        console.error('play services are not available');
    }
}
signIn = async () => {
  try {
    GoogleSignin.hasPlayServices().then(()=>{
       GoogleSignin.signIn().then((info)=>{
        console.log('user info',info);
       },(err)=>{
         console.log('error',err)
       })
     
    })
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native !</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <GoogleSigninButton
        title="LearnMore"
        style={{ width:312, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.signIn} 
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});