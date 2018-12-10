import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import CaroselItem from './CaroselItem';

export default class HomeCarosel extends Component{
    constructor(props){
        super(props)
        this.width = Dimensions.get('window').width;
    }
    state = {
        entries: 
         [{
            title: 'Lifetime Assistance',
            illustration: 'https://qawittyparrotcloud.blob.core.windows.net/qawpimagescontainer/e7c68c7c-b1a3-4ac0-b19e-617d1423048b.png'
        },
        {
            title: 'Convenience and Ease',
            illustration: 'https://qawittyparrotcloud.blob.core.windows.net/qawpimagescontainer/e7c68c7c-b1a3-4ac0-b19e-617d1423048b.png'
        },
        {
            title: 'Bank Grade Security',
            illustration: 'https://qawittyparrotcloud.blob.core.windows.net/qawpimagescontainer/e7c68c7c-b1a3-4ac0-b19e-617d1423048b.png'
        },
        {
            title: 'Dedicated Advisor',
            image: 'https://qawittyparrotcloud.blob.core.windows.net/qawpimagescontainer/e7c68c7c-b1a3-4ac0-b19e-617d1423048b.png'
        }],
        activeSlide:0
    }

    render(){
        return (
            <View style={styles.slide}>
                <Swiper style={styles.wrapper} showsButtons={false}>
                        {this.state.entries.map((item,index)=> <CaroselItem item={item} key={index}/>)}
                </Swiper>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        height: 300,
        paddingHorizontal: 20
        // other styles for the item container
    },
    slideInnerContainer: {
        width: 280,
        flex: 1
        // other styles for the inner container
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
});