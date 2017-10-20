import {
    TouchableHighlight,
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
    RefreshControl
} from 'react-native'
import React, {Component, PureComponent} from 'react'
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
        data: {
            name: "jane"
        }
    }, {
        title: 'scrollView',
        uri: 'ScrollView'
    }, {
        title: 'FetchDemo',
        uri: 'Fetch'
    }
]
class FlatListItem extends PureComponent {
    onClick = () => {
        this
            .props
            .onClickHandler();
    }
    render() {
        const {title} = this.props;
        return (
            <TouchableHighlight
                underlayColor="#EFEFEF"
                style={styles.item}
                onPress={this.onClick}>
                <Text
                    style={{
                    textAlign: 'center',
                    fontSize: 20,
                    textAlign: 'left'
                }}>{title}</Text>
            </TouchableHighlight>
        );
    }
}
class MainScreen extends Component {
    static navigationOptions = {
        title: 'Index'
    };
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        const {isRefreshing} = this.state;
        const refershControl = (<RefreshControl
            onRefresh={() => {
            this.setState({isRefreshing: true});
            setTimeout(() => {
                this.setState({isRefreshing: false})
            }, 3000);
        }}
            refreshing={isRefreshing}
            title={'刷新中'}
            colors={['#EFEFEF']}
            progressBackgroundColor={"#DFDFDF"}/>);
        return (
            <View style={styles.container}>
                <FlatList
                    refreshControl={refershControl}
                    ItemSeparatorComponent={Separator}
                    data={listData}
                    keyExtractor={(item, keyIndx) => {
                    return keyIndx;
                }}
                    renderItem={({item}) => {
                    return (<FlatListItem
                        title={item.title}
                        onClickHandler={() => {
                        navigate(item.uri, {data: item.data});
                    }}/>);
                }}/>
            </View>
        )
    }
}
export default MainScreen;