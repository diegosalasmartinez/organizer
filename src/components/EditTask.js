import React, { Component } from 'react'
import axios from 'axios';
import Navbar from "./Navbar"
import TaskForm from "./TaskForm"
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
        console.log('UPDATE TASK');
        // axios.post(`${process.env.REACT_APP_API}/tasks/add`,newTask)
        //     .then(res => {
        //         console.log(res.data);
        //         window.location.href="./";
        //     })
        //     .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="mainPage">
                <Navbar />
                <br></br>
                <TaskForm onSubmit={this.updateTask} textButton={"Update Task"}/>
            </div>
        )
    }
}
