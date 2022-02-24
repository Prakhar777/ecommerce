import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'',
          age:'',
          country:'',
          position:'',
          wages:'',
          employeeList: [],
          newWages:''
       }
     }

   handleName = (event) => {
       this.setState({
           name: event.target.value
       })
   }
   handleAge = (event) => {
    this.setState({
        age: event.target.value
    })
}
handleCountry = (event) => {
    this.setState({
        country: event.target.value
    })
}
handlePosition = (event) => {
    this.setState({
        position: event.target.value
    })
}
handleWages = (event) => {
    this.setState({
        wages: event.target.value
    })
}
// handleNewWages = (event) => {
//   this.setState({
//       newWages: event.target.value
//   })
// } 
handleSubmit = (event) => {
    
    Axios.post('http://localhost:3001/create', {
        name: this.state.name,
        age: this.state.age,
        country:this.state.country,
        position:this.state.position,
        wages:this.state.wages
    }).then(() => {
        console.log("data inserted");
    })


    event.preventDefault();
}

getEmployees = () => {
 
  Axios.get('http://localhost:3001/employees').then((response) => {
    //console.log(response);
    this.setState({
    // employeeList:this.state.employeeList.push(response)
    //employeeList:[...this.state.employeeList, response.data]
    employeeList:(response.data)
    })

   console.log(this.state.employeeList);
   // employeeList(response.data)
})
}

  render() {
      const {name, age, country, position, wages} = this.state;
      
      
    return ( 
<div>
        <form onSubmit={this.handleSubmit}>
            <div className='input-cover'>
        <label>Name:&nbsp;</label>
        <input type="text" value={name} onChange={this.handleName} />
      </div>
      <div className='input-cover'>
        <label>Age:&nbsp;</label>
        <input type="number" value={age} onChange={this.handleAge} />
      </div>
      <div className='input-cover'>
        <label>Country:&nbsp;</label>
        <input type="text" value={country} onChange={this.handleCountry} />
      </div>
      <div className='input-cover'>
        <label>Position:&nbsp;</label>
        <input type="text" value={position} onChange={this.handlePosition}/>
      </div>
      <div className='input-cover'>
        <label>Wages (annually):&nbsp;</label>
        <input type="number" value={wages} onChange={this.handleWages}/>
      </div>
      <div className='input-cover text-center'>
        <button type='submit'>Add Employee</button>
      </div>
        </form>

<hr />
<button onClick={this.getEmployees}>Show Employees</button>


{this.state.employeeList.map((val, key) => {
  return (
<div key={val.id}>
  <h4 >{val.id}</h4>
  <h4>{val.name}</h4>
  <h4>{val.age}</h4>
  <input key={val.id} value={this.state.newWages} onChange={(event) => {
  this.setState({
      newWages: event.target.value
  })
} } type="text" />
  </div>

  ) 
})}

        </div>
        )
        ;
  }
}

export default Form;
