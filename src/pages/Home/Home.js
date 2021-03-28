import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import Navbar from '../../components/common/Navbar'
import TasksList from '../../components/Task/TaskList'

const cookies = new Cookies();

export default class Home extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="/organizer";
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <TasksList />
            </>
        )
    }
}
