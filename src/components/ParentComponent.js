import React, { Component } from 'react';
import Form from './Form'
import DisplaysData from "./DisplaysData"

class ParentComponent extends Component {
        state = {
            firstName: "",
            lastName: "",
        }
     

        handleChange = event => {
          this.setState({
            [event.target.name]:
            event.target.value
          })
        }
     
      render() {
            return (
              <Form
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
              />,
              <DisplaysData formData={this.state}/>
            )
        }
}   


export default ParentComponent;