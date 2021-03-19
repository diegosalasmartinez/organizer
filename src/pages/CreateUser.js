import React, { Component } from 'react'
import axios from 'axios';
import FormUser from './FormUser'
import Cookies from 'universal-cookie'

require('dotenv').config();
const cookies = new Cookies();

export default class CreateUser extends Component {
    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./home";
        }
    }

    createUser = (newUser)=>{
        axios.post(`${process.env.REACT_APP_API}/users/add`,newUser)
            .then(res => {
                console.log(res.data);
                cookies.set('username',newUser.username, {path: "/"});
                cookies.set('password',newUser.password, {path: "/"});
                window.location.href="./home";
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <FormUser createUser={this.createUser}/>
        )
    }
}
