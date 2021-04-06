import React, { Component } from 'react';

import TaskForm from "../../components/task/TaskForm"

import { createTask } from '../../services/api/taskAPI'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class CreateTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    createTask = async (newTask) => {
        const res = await createTask(newTask);
        window.location.href="../home";
    }

    render() {
        return (
            <TaskForm onSubmit={this.createTask} textButton={"Create"} title={"Create Task"}/>
        )
    }
}