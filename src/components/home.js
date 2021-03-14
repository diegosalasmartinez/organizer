import React, { Component } from 'react'
import Cookies from 'universal-cookie';

import Navbar from "./navbar"
import TasksList from "./tasks-list";

const cookies = new Cookies();

export default class Home extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="/organizer";
        }
    }

    render() {
        return (
            <div className="mainPage">
                <Navbar />
                <br></br>
                <TasksList/>
            </div>
        )
    }
}
