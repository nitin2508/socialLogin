import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage} from 'react-native';
class HomeScreen extends Component{

    signOut = async()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render(){
        return  (
            <View style={styles.container}>
               <Button
                onPress={()=>this.signOut()}
                title="SignOut"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})