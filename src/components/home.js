import React, { Component } from 'react'
import Cookies from 'universal-cookie';

import Navbar from "./Navbar"
import TasksList from "./TaskList";

const cookies = new Cookies();

export default class Home extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="/organizer";
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <br></br>
                <TasksList />
            </div>
        )
    }
}
