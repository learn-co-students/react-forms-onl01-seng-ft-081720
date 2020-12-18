// src/components/ParentComponent
import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
 
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // generalize the code to DRY code
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  render() {
    return (
      // <Form
      //   formData={this.state}
      //   handleFirstNameChange={this.handleFirstNameChange}
      //   handleLastNameChange={this.handleLastNameChange}
      // />
      <div>
        {/* Now we have a component that reads from the same state we're changing with the form. */}
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
    </div>
    )
  }
  // event callbacks
}
 
export default ParentComponent;