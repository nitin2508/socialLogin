import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TextField } from 'react-native-material-textfield';

class RegisterScreen extends Component{
    state = {
        phone: '',
      };
    
      render() {
        let { phone } = this.state;
     
        return (
          <TextField
            label='Phone number'
            value={phone}
            keyboardType="phone-pad"
            onChangeText={ (phone) => this.setState({ phone }) }
          />
        );
      }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})