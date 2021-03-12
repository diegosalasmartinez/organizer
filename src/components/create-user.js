import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUserame = (e)=>{
        this.setState({username: e.target.value});
    }
    onChangePassword = (e)=>{
        this.setState({password: e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
        };
        console.log(newUser);
        axios.post(`${process.env.REACT_APP_API}`+'/users/add',newUser)
            .then(res => console.log(res.data));

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
                            value={this.state.username}
                            onChange={this.onChangeUserame}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input  
                            type="password"
                            required
                            className="form-control"
                            id="passwordInput"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
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
