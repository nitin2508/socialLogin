import React,{Component} from 'react';
import {View,Image,StyleSheet,Dimensions,Text} from 'react-native';

class CaroselItem extends Component{
      render() {
          let width = Dimensions.get('window').width
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                source={{uri:this.props.item.illustration}}
                /> 
                <Text style={styles.text}>{this.props.item.title}</Text>
            </View>
        );
      }
}

export default CaroselItem;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    image:{
        width:Dimensions.get('window').width*.7,
        height:180,
        borderRadius:4
    },  
    text:{
        fontSize:16,
        fontWeight:"500",
        marginTop:40
    }
})

{/* */}