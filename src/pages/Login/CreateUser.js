import React, { Component } from 'react'

import UserForm from './UserForm'

import { createUser as createUserAPI } from '../../services/api/user-api'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class CreateUser extends Component {
    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./home";
        }
    }

    createUser = async (newUser)=>{
        const {passwordConfirmation, ...user} = newUser;
        const myUser = await createUserAPI(user);
        cookies.set('id',myUser._id, {path: "/"});
        cookies.set('username',myUser.username, {path: "/"});
        cookies.set('password',myUser.password, {path: "/"});
        cookies.set('name',myUser.name, {path: "/"});
        cookies.set('lastName',myUser.lastName, {path: "/"});
        cookies.set('email',myUser.email, {path: "/"});
        window.location.href="./home";
    }

    render() {
        return (
            <UserForm createUser={this.createUser}/>
        )
    }
}
