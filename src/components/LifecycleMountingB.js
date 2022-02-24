import React, { Component } from 'react'

 class LifecycleMountingB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:"data"
      }
      console.log("LifecycleMountingB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleMountingB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifecycleMountingB componentDidMount")
    }

  render() {
    console.log("LifecycleMountingB render")
    return (
      <div>LifecycleMountingB</div>
     
    )
    
  }
}

export default LifecycleMountingB