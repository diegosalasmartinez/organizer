import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

require('dotenv').config();
const cookies = new Cookies();

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            userFailed: false
        }
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="/organizer/home";
        }
    }

    onChange = (e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({[name]: value});
    }

    userInvalid(){
        if(!this.state.userFailed){
            return {
                display: "none"
            }
        }
        return{
            color: "red",
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            "username": this.state.username,
            "password": this.state.password,
        };
        axios.post(`${process.env.REACT_APP_API}/users/add`,newUser)
            .then(res => {
                console.log(res.data);
                cookies.set('username',newUser.username, {path: "/"});
                cookies.set('password',newUser.password, {path: "/"});
                window.location.href="/organizer/home";
            })
            .catch(e => console.log(e));

        this.setState({username: '',password: ''});
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h3>Create New User</h3>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            id="usernameInput"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input  
                            type="password"
                            required
                            className="form-control"
                            id="passwordInput"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                    </div>
                    <div>¿Ya tienes una cuenta?
                        <span> </span>
                        <Link to="/organizer">Ingresa</Link>
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
