import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import validateFields from '../../Utils/userUtils'

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

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API}/users`)
        .then(res => {
            const usernames = res.data.map( function(obj){ return obj["username"] })
            this.setState({users: usernames});
        })
        .catch(e => console.log(e));
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
        const newErrors = this.state.errors;
        newErrors[name] = '';
        this.setState({errors: newErrors});
    }

    showError = (field) => {
        if(this.state.errors[field]){
            return <p style={{color: "red"}}>{this.state.errors[field]}</p>
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const {users, ...withoutUsers} = this.state;
        const {errors, ...newUser} = withoutUsers;
        const newErrors = validateFields(newUser,users);
        
        if(!Object.keys(newErrors).length){
            this.props.createUser(newUser);
        } 
        this.setState({errors: newErrors});
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
                        {this.showError("name")}
                        <div className="form-group col-md-6">
                            <label htmlFor="lastNameInput">Lastname</label>
                            <input type="text" required className="form-control" id="lastNameInput" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </div>
                        {this.showError("lastName")}
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input type="email" required className="form-control" id="emailInput" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    {this.showError("email")}
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" required className="form-control" id="usernameInput" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    {this.showError("username")}
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" required className="form-control" id="passwordInput" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    {this.showError("password")}
                    <div className="form-group">
                        <label htmlFor="passwordConfirmationInput">Confirm password</label>
                        <input type="password" required className="form-control" id="passwordConfirmationInput" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    </div>
                    {this.showError("passwordConfirmation")}
                    <div>
                        ¿Have an account?<span> </span>
                        <Link to="./">Log in</Link>
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
