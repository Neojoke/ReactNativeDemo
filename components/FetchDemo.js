import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
class FetchDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }
    fetchData = () => {
        fetch('https://postman-echo.com/get').then((response) => {
            this.setState({
                result: JSON.stringify(response.json())
            });
        });
    }
    render() {
        const {result} = this.state;
        var children;
        if (result.length > 0) {
            children = (
                <Text>{result}</Text>
            );
        } else {
            children = (<Button
                title="请求数据"
                onPress={this.fetchData}
                style={{
                boderWidth: 1
            }}/>);
        }
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                {children}
            </View>
        );
    }
}
export default FetchDemo;