// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    // this.setState((state, props) => ({
    //   timesClicked: state.timesClicked + props.increment
    // }))

//Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
//  this.setState({
//   timesClicked: this.state.timesClicked + 1
// })

//In this case, the calculation is a simple +1 counter, but in another case it may have many calculations that finish at different timesand rely on each other that may get messed up.
    this.setState(state => ({
     timesClicked: state.timesClicked + 1
   }))

  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.timesClicked}
      </button>
    )
  }
}

export default DigitalClicker
