import React, { Component } from "react";

class ClassState extends Component {

    constructor() {
        super()
        this.state = {
            message: "Text change using Class State"
        }
    }

    changeMessage() {
        this.setState({
            message:"text changed !"
        })
    }

    render() {
 
        return  (
<div>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeMessage()}>Click Class State</button>
        </div>
        )

        
    }
       
   
}


export default ClassState