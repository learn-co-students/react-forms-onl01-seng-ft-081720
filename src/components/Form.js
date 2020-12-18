import React from 'react';

class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//   }

//   // uncontrolled version of before
//   // handleSubmit = event => {
//   //   event.preventDefault()
//   //   const firstName = event.target.children[0].value
//   //   const lastName = event.target.children[1].value
//   //   this.sendFormDataSomewhere({ firstName, lastName })
//   // }

//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//           <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//           <input type="submit"/>
//         </form>
//         {this.listOfSubmissions()}
//       </div>
//     )
//   }
// then turn into this because this parent controller is handling everything else
render() {
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={event => this.props.handleFirstNameChange(event)}
          // Set name attributes so there can be less clutter of code in the parent controller to handle the input of the attributes
          name="firstName"
          value={this.props.formData.firstName}
        />
        <input
          type="text"
          onChange={event => this.props.handleLastNameChange(event)}
          name="lastName"
          value={this.props.formData.lastName}
        />
      </form>
    </div>
  )
}
// moved form logic up to parent form values, event callbacks as props
}

export default Form;