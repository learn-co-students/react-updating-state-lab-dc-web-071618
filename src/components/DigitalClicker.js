// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    incrementTimesClicked = () => {
        let newVal = this.state.timesClicked
        newVal++
        this.setState({
            timesClicked: newVal
        })
    }

    render() {
        return (
            <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
        )
    }
}