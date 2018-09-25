import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increamentTimesClicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.increamentTimesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
