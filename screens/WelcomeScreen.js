
import React, {Component} from 'react';
import {StyleSheet, View,Image} from 'react-native';
import { Button,Text} from 'native-base'
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
        <View>
          <GoogleLogin/>
            <Text style={{marginBottom:10,marginTop:10,textAlign: "center",}}>or use email address</Text>
          <View style={styles.authButton}>
          <Button onPress={()=>this.props.navigation.navigate('Login')} transparent>
            <Text>LOG IN</Text>
          </Button>
          <Text> | </Text>
          <Button  onPress={()=>this.props.navigation.navigate('Register')} transparent>
            <Text>SIGN UP</Text>
          </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    padding:30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  authButton:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  }

});