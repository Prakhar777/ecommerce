import React, { Component } from 'react'
import LifecycleMountingB from './LifecycleMountingB'


 class LifecycleMountingA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:"data"
      }
      console.log("LifecycleMountingA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleMountingA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifecycleMountingA componentDidMount")
    }

  render() {
    console.log("LifecycleMountingA render")
    return (
        <div>
            <LifecycleMountingB />
<div>LifecycleMountingA</div>
        </div>
      
     
    )
    
  }
}

export default LifecycleMountingA