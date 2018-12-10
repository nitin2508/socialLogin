import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class GoogleLogin extends Component{

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
          console.log('1')
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
          console.log('2')
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log('3')
        } else {
            console.log('4')
          // some other error happened
        }
      }
    };

    render(){
        return  (
            <GoogleSigninButton
            title="LearnMore"
            style={{ width:312, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.signIn} 
          />
        )
    }
}

export default GoogleLogin;
