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
        const {passwordConfirmation, ...user} = newUser;
        axios.post(`${process.env.REACT_APP_API}/users/add`,user)
            .then(res => {
                const myUser = res.data;
                cookies.set('id',myUser._id, {path: "/"});
                cookies.set('username',myUser.username, {path: "/"});
                cookies.set('password',myUser.password, {path: "/"});
                cookies.set('name',myUser.name, {path: "/"});
                cookies.set('lastName',myUser.lastName, {path: "/"});
                cookies.set('email',myUser.email, {path: "/"});
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