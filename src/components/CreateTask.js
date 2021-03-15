import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./Navbar"
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
                window.location.href="./";
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="mainPage">
                <Navbar />
                <br></br>
                <TaskForm onSubmit={this.createTask} textButton={"Create Task"}/>
            </div>
        )
    }
}