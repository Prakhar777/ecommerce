import React, { Component } from "react";

class DestructuringClass extends Component
{
    render() {
        const {data1, data2} = this.props;

        //destructuring state, same way as props 
      //  const {data1, data2} = this.state;
        return <h2>Class Destructure {data1} and {data2}</h2>
        
    }
}

export default DestructuringClass