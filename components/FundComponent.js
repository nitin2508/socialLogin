import React ,{Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class FundComponent extends Component{
    render(){
        return(
            <View>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                //Your text here
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}