import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage,Image} from 'react-native';
//import { TextField } from 'react-native-material-textfield';
// import HomeCarosel from '../components/login/HomeCarosel';

class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:''
        };
    }
    SignIn = async () => {
        await AsyncStorage.setItem("userToken", "Nitin");
        this.props.navigation.navigate("App");
    };

    render(){
        let { phone } = this.state;
        return  (
            <View style={styles.container}>
                <View style={styles.upwardlyImage}>
                <Image
                    style={{width: 60, height: 60}}
                    source={{uri: 'https://images.upwardly.in/logos/upwardly_emblem_green.png'}}
                />
                </View>
                {/* <HomeCarosel/> */}
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:20
    },
    upwardlyImage:{
        marginVertical:30
    }
})


{/* <Text>Login scr</Text>
<Button
onPress={()=>this.SignIn()}
title="Login"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
<Button
title="Register"
onPress={() => this.props.navigation.navigate('Register')}
/> */}