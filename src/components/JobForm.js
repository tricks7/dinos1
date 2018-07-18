import React, { Component } from 'react';

class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            pay: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit(event) {
    event.preventDefault();
    this.props.addListing({
        ...this.state,
        interested: []
    });

    this.setState({
        title: '',
        pay: '',
        description: '',
    })    
}

    render() {
        return (
            <aside id="side-bar">
                <h3>Add a Job</h3>
                <form className="job-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

                    <label htmlFor="pay">Compensation</label>
                    <input type="text" name="pay" value={this.state.pay} onChange={this.handleChange} />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows="8" cols="40" value={this.state.description} onChange={this.handleChange} />
                    
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </aside>
        )
    }
}

export default JobForm