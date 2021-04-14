import React, { Component } from 'react'

import TaskForm from '../../components/task/TaskForm'

import { updateTask } from '../../services/api/task-api'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class EditTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    updateTask = async (newTask) => {
        const res = await updateTask(newTask);
        window.location.href="../../home";
    }

    render() {
        return (
            <TaskForm onSubmit={this.updateTask} textButton={"Update"} id={this.props.match.params.id}/>
        )
    }
}
