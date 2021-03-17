import React, { Component } from 'react'
import axios from 'axios';
import TaskForm from "../components/TaskForm"
import Cookies from 'universal-cookie';

require('dotenv').config();
const cookies = new Cookies();

export default class EditTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    updateTask = (newTask) => {
        axios.patch(`${process.env.REACT_APP_API}/tasks/${newTask.id}`,newTask)
            .then(res => {
                console.log(res.data);
                window.location.href="../../home";
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <TaskForm onSubmit={this.updateTask} textButton={"Update"} title={"Update Task"} id={this.props.match.params.id}/>
        )
    }
}
