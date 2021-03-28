import React, { Component } from 'react'
import Navigation from '../../components/common/Navigation'
import ChangePassword from './ChangePassword'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            email: "",
            password: "",
            newPassword: ""
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('UPDATING DATA');
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
        // const newErrors = this.state.errors;
        // newErrors[name] = '';
        // this.setState({errors: newErrors});
    }

    render() {
        return (
            <>
                <Navigation/>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="nameInput">Name</label>
                                <input type="text" required className="form-control" id="nameInput" name="name" placeholder="You're name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastNameInput">Last name</label>
                                <input type="text" required className="form-control" id="lastNameInput" name="lastName" placeholder="My last name" value={this.state.lastName} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email</label>
                            <input type="email" required className="form-control " id="emailInput" name="email" placeholder="myemail@gmail.com" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <ChangePassword/>    
                    </form>
                </div>
            </>
        )
    }
}
