import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

require('dotenv').config();
const cookies = new Cookies();

export default class Login extends Component {
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
            window.location.href="./home";
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value, userFailed: false});
    }
    
    login = (e)=>{
        e.preventDefault();
        const { username, password} = this.state;
        axios.get(`${process.env.REACT_APP_API}/users/login/${username}/${password}`)
            .then(res => res.data)
            .then(data => {
                if(data.length === 1){
                    const myUser = data[0];
                    cookies.set('id',myUser._id, {path: "/"});
                    cookies.set('username',myUser.username, {path: "/"});
                    cookies.set('password',myUser.password, {path: "/"});
                    window.location.href="./home";
                }
                else{
                    this.setState({userFailed: true});
                }
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h3>Login</h3>
                <br></br>
                <form onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" required className="form-control" id="usernameInput" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" required className="form-control" id="passwordInput" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    {this.state.userFailed && <p style={{color: "red"}}>Usuario y contraseña no coinciden</p>}
                    <div>
                        ¿Don't have an account?<span> </span>
                        <Link to="./register-user">Sign up</Link>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Enter" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
