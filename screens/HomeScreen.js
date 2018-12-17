import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fund from '../components/FundComponent';
class HomeScreen extends Component{
    static navigationOptions = {
        headerTitle: 'Upwardly',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      };
    signOut = async()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render(){
        return  (
            <View style={styles.container}>
                <View>
                    <Fund/>
                </View>
                <Icon size={30} name="md-trash"/>
               <Button
                onPress={()=>this.signOut()}
                title="Sign"
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
        padding:10
    }
})