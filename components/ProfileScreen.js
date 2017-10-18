import React, {Component} from 'react'
import {View, Text} from 'react-native'
class ProfileScreen extends Component {

    render() {
        const styles = {
            container: {
                flex: 1,
                backgroundColor: "blue"
            }
        }
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

export default ProfileScreen;