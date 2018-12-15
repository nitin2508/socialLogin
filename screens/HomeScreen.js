import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeScreen extends Component{

    signOut = async()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render(){
        return  (
            <View style={styles.container}>
                <Icon size={30} name="md-trash"/>
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