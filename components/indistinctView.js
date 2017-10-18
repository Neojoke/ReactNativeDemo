import { Text } from 'react-native'
import React, { Component } from 'react'

class indistinctVoiew extends Component {
    constructor(props) {
        super(props);
        this.state = { showText:true };
        setInterval(()=>{
            this.setState((previousState=>{
                return { showText: !previousState.showText };
            }));
        }, 3000);
    }
    render () {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{ display }</Text>
        );
    }
}

export default indistinctVoiew