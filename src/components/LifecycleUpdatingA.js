import React, { Component } from 'react'

import LifecycleUpdatingB from './LifecycleUpdatingB'

 class LifecycleUpdatingA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:"data"
      }
      console.log("LifecycleUpdatingA constructor")
    }


    

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleUpdatingA getDerivedStateFromProps")
        return null
    }

   

shouldComponentUpdate() {
  console.log("LifecycleUpdatingA shouldComponentUpdate")
  return true
}
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("LifecycleUpdatingA getSnapshotBeforeUpdate")
  return null
}

componentDidUpdate() {
  console.log("LifecycleUpdatingA componentDidUpdate")
}
handleChange = () => {
  this.setState(
    {
      first:"stateChanged"
    }
  ) 
}
  render() {
    console.log("LifecycleUpdatingA render")
    return (
        <div>
            <LifecycleUpdatingB />
<div>LifecycleUpdatingA</div>
<button onClick={this.handleChange}>Change State</button>
        </div>
      
     
    )
    
  }
}

export default LifecycleUpdatingA