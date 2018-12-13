import React,{Component} from 'react';
import {View,StyleSheet,AsyncStorage} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import GoogleLogin from '../components/GoogleLogin';
import { Button,Text} from 'native-base'

class RegisterScreen extends Component{
    state = {
        email: '',
        password:''
      };

    SignIn = async () => {
        await AsyncStorage.setItem("userToken", "Nitin");
        this.props.navigation.navigate("App");
    };
    
      render() {
        let { phone } = this.state;
     
        return (
          <View style={styles.container}>
            <TextField
              label='Email Address'
              value={phone}
              keyboardType="email-address"
              onChangeText={ (email) => this.setState({ email }) }
              fontSize={18}
            />
            <TextField
              label='Password'
              value={phone}
              secureTextEntry={true}
              fontSize={18}
              onChangeText={ (password) => this.setState({ password }) }
            />
            <Button onPress={this.SignIn} style={{marginTop:40,marginBottom:20}} block success>
              <Text>Register</Text>
            </Button>
              <GoogleLogin/>
          </View>
        );
      }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
      padding:30,
    }
})