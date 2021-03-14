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
            window.location.href="/organizer/home";
        }
    }

    onChange = (e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({[name]: value, userFailed: false});
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

    login = (e)=>{
        e.preventDefault();
        const user = {
            username: `${this.state.username}`,
            password: `${this.state.password}`,
        };
        axios.post(`${process.env.REACT_APP_API}/users/login`,user)
            .then(res => res.data)
            .then(data => {
                if(data.length === 1){
                    const myUser = data[0];
                    cookies.set('username',myUser.username, {path: "/"});
                    cookies.set('password',myUser.password, {path: "/"});
                    window.location.href="./organizer/home";
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
                    <div style={this.userInvalid()}>Usuario y contraseña no coinciden</div>
                    <div>¿No tienes una cuenta?
                        <span> </span>
                        <Link to="/organizer/create-user">Regístrate</Link>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Entrar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
