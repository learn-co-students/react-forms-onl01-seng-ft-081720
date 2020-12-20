import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

class ParentCompoenent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Form formdata={this.state}
                        handleChange={this.handleChange}
                   />
                <DisplayData formdata={this.state} />
            </div>
        )
    }
}

export default ParentCompoenent;