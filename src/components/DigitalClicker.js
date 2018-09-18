// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
      <button onClick={this.countClicks}>{this.state.timesClicked}</button>
    )
  }

  countClicks = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
    console.log(this.state.timesClicked)
  }
}
