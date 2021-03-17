import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import Navbar from "../components/Navbar"
import TasksList from "../components/TaskList";

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
