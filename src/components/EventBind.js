import React, { Component } from 'react';

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
// for method 3 (preferred method, binding in constructor)
      this.clickHandler = this.clickHandler.bind(this)

    }
    // for method 1 and 2
    // clickHandler() {
    //     this.setState({
    //         message:"Goodbye"
    //     })
    //     console.log(this)
    // }


    //for method 4
clickHandler = () => {
    this.setState({
        message:"goodbye !"
    })
}

  render() {
    return ( 
    
    <div>
        <h4>{this.state.message}</h4>
{/* <button onClick={this.clickHandler.bind(this)}>Event Bind method 1</button> */}
{/* <button onClick={() => this.clickHandler()}>Event Bind method 2</button> */}
{/* <button onClick={this.clickHandler}>Event Bind method 3</button> */}
<button onClick={this.clickHandler}>Event Bind method 4</button>
    </div>

        )
        
        ;
  }
}

export default EventBind;
