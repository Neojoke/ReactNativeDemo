import React, {Component} from 'react'
import {View, Text} from 'react-native'
class ProfileScreen extends Component {

    render() {
        const {name} = this.props.navigation.state.params.data;
        const styles = {
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }
        }
        return (
            <View style={styles.container}>
                <Text>{"Name is:" + name}</Text>
            </View>
        );
    }
}

export default ProfileScreen;