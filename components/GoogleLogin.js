import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class GoogleLogin extends Component{
    state = {
        isSigninInProgress:false
    }

     componentDidMount(){
        try {
            GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }).then(()=>{
                console.log('services')
            })
            GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                webClientId: '128630518099-fepdcgi72rfl5dijtuh332b13q3v0j3b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
               // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                //hostedDomain: '', // specifies a hosted domain restriction
                //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
                //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
                //accountName: '', // [Android] specifies an account name on the device that should be used
                //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
              });
        // google services are available
        } catch (err) {
            console.error('play services are not available');
        }
    }

    signIn = async () => {
        console.log('Sign in called')
        try {
           GoogleSignin.hasPlayServices().then(()=>{
               console.log('Has play services');
            GoogleSignin.signIn()
            .then((userInfo)=>{
                console.log(userInfo);
            },(err)=>{
                console.log(err)
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

    render(){
        return(
            <View style={styles.container}>
               <GoogleSigninButton
                style={{ width: 48, height: 48 }}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn}
                title='Continue With Google'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})