import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import validateFields from './validationNewUser'

export default class FormUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            username: '',
            password: '',            
            passwordConfirmation: '',
            users: [],            
            errors: {
                name: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                passwordConfirmation: '',
            }
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    userInvalid(){
        //Validate forms
        if(!this.state.userFailed){
            return { display: "none" }
        }
        return { color: "red" }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const {users, ...withoutUsers} = this.state;
        const {errors, ...newUser} = withoutUsers;
        const newErrors = validateFields(newUser,users);
        console.log(newErrors);
        // this.props.createUser(newUser);
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h3>Create New User</h3>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="nameInput">Name</label>
                            <input type="text" required className="form-control" id="nameInput" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastNameInput">Lastname</label>
                            <input type="text" required className="form-control" id="lastNameInput" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input type="email" required className="form-control" id="emailInput" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" required className="form-control" id="usernameInput" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" required className="form-control" id="passwordInput" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirmationInput">Confirm password</label>
                        <input type="password" required className="form-control" id="passwordConfirmationInput" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    </div>
                    <div>
                        ¿Ya tienes una cuenta?<span> </span>
                        <Link to="./">Ingresa</Link>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
