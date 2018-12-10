import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import Carousel ,{Pagination} from 'react-native-snap-carousel';
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

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'black'
              }}give 
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }


    _renderItem ({item, index}) {
        return (
            <CaroselItem item={item}/>
            // <View style={{width:Dimensions.get('window').width}} >
            //     <Image
            //     style={{width: this.width, height: 200}}
            //     source={{uri: item.illustration}}
            //     />
            // </View>
        );
    }

    render(){
        return (
            <View style={styles.slide}>
                <Carousel
                windowSize={1}
                data={this.state.entries}
                renderItem={this._renderItem}
                itemHeight={350}
                itemWidth={Dimensions.get('window').width}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={this.width}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        height: 350,
        paddingHorizontal: 20
        // other styles for the item container
    },
    slideInnerContainer: {
        width: 280,
        flex: 1
        // other styles for the inner container
    }
});