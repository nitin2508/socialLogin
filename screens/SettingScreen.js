import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

class SettingScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Setting Screens</Text>
            </View>
        )
    }
}

export default SettingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})