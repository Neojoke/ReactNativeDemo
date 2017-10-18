import {Button, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {Component} from 'react'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})
function Separator(props) {
    return (<View style={{
        height: 1,
        backgroundColor: 'black'
    }}/>);
}
class MainScreen extends Component {
    static navigationOptions = {
        title: 'Index'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={Separator}
                    data={[
                    {
                        key: 'Devin'
                    }, {
                        key: 'Jackson'
                    }, {
                        key: 'James'
                    }, {
                        key: 'Joel'
                    }, {
                        key: 'John'
                    }, {
                        key: 'Jillian'
                    }, {
                        key: 'Jimmy'
                    }, {
                        key: 'Julie'
                    }
                ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
            </View>
        )
    }
}

export default MainScreen;