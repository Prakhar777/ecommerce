import React, { Component } from 'react';

class StateDetails extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}

increment() {
    this.setState({
        count: this.state.count + 1
    })
}

  render() {
    return (
        <div>
          <p>  count - {this.state.count} </p>
         <button onClick={() => this.increment()}>Increment</button>

        </div>
    )
  }
}

export default StateDetails;
