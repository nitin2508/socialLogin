import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Swiper from 'react-native-swiper';

class RegisterScreen extends Component{
    state = {
        phone: '',
      };
    
      render() {
        let { phone } = this.state;
     
        return (
          <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
          </View>
      </Swiper>
        )
        //   <TextField
        //     label='Phone number'
        //     value={phone}
        //     keyboardType="phone-pad"
        //     onChangeText={ (phone) => this.setState({ phone }) }
        //   />
        // );
      }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper: {
    },
    slide1: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
})