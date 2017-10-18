import {Button} from 'react-native'
import React, {Component} from 'react'

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Index'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (<Button
            title="Go to jane's profile"
            onPress={() => {
            navigate('Profile', {name: 'Jane'});
        }}/>)
    }
}

export default MainScreen;