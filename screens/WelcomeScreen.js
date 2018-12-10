
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import HomeCarosel from '../components/login/HomeCarosel';

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
signOut = ()=>{
  this.props.navigation.navigate('Register');
}
  render() {
    return (
      <View style={styles.container}>
           <GoogleSigninButton
        title="LearnMore"
        style={{ width:312, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.signIn} 
      />
        <Image
        style={{width: 60, height: 60}}
        source={{uri: 'https://images.upwardly.in/logos/upwardly_emblem_green.png'}}
        />
    <HomeCarosel/>
        <Button
          onPress={()=>this.signOut()}
          title="SignOut"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
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