import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // We use [] brackets so we can add attributes (name)
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary} = this.state;
        return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    required placeholder="What's his name?"
                    name='name' 
                    value={name} 
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    required placeholder="Salary in $?" 
                    name='salary' 
                    value={salary} 
                    onChange={this.onValueChange}/>

                <button type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;