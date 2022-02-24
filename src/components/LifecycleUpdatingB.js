import React, { Component } from 'react'



 class LifecycleUpdatingB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:"data"
      }
      console.log("LifecycleUpdatingB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleUpdatingB getDerivedStateFromProps")
        return null
    }

   

shouldComponentUpdate() {
  console.log("LifecycleUpdatingB shouldComponentUpdate")
  return true
}
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("LifecycleUpdatingB getSnapshotBeforeUpdate")
  return null
}

componentDidUpdate() {
  console.log("LifecycleUpdatingB componentDidUpdate")
}

  render() {
    console.log("LifecycleUpdatingB render")
    return (
        <div>
            
<div>LifecycleUpdatingB</div>
        </div>
      
     
    )
    
  }
}

export default LifecycleUpdatingB