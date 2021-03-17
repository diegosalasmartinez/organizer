import React, { Component } from 'react';
import axios from 'axios';
import TaskForm from "./TaskForm"
import Cookies from 'universal-cookie';

require('dotenv').config();
const cookies = new Cookies();

export default class CreateTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    createTask = (newTask) => {
        axios.post(`${process.env.REACT_APP_API}/tasks/add`,newTask)
            .then(res => {
                console.log(res.data);
                window.location.href="../home";
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <TaskForm onSubmit={this.createTask} textButton={"Create"} title={"Create Task"}/>
        )
    }
}