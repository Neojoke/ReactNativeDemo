import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, Image} from 'react-native'
class ScrollViewDemo extends Component {
    render() {
        const items = Array();
        for (let i = 0; i < 40; i++) {
            items.push(
                <Image
                    source={{
                    uri: "https://facebook.github.io/react-native/img/header_logo.png"
                }}
                    key={i + 1}
                    style={{
                    backgroundColor: "red",
                    height: 40,
                    width: 40
                }}></Image>
            )
        }
        return (
            <ScrollView>
                <Text style={{
                    fontSize: 96
                }}>滚动吧！</Text>
                {items}
            </ScrollView>
        );
    }
}

export default ScrollViewDemo;