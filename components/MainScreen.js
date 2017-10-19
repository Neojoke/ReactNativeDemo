import {
    TouchableHighlight,
    Button,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, {Component} from 'react'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    item: {
        padding: 10,
        height: 60,
        justifyContent: "center"
    },
    separator: {
        height: 1,
        backgroundColor: '#EFEFEF'
    }
})
function Separator(props) {
    return (<View style={styles.separator}/>);
}
const listData = [
    {
        title: '切换页面传值',
        uri: 'Profile',
        key: 1,
        data: {
            name: "jane"
        }
    }, {
        title: 'scrollView',
        uri: 'ScrollView',
        key: 2
    }
]
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
                    data={listData}
                    renderItem={({item}) => {
                    return (
                        <TouchableHighlight
                            underlayColor="#EFEFEF"
                            style={styles.item}
                            onPress={() => {
                            navigate(item.uri, {data: item.data});
                        }}>
                            <Text
                                style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>{item.title}</Text>
                        </TouchableHighlight>
                    );
                }}/>
            </View>
        )
    }
}
export default MainScreen;