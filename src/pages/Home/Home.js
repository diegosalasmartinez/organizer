import React, { Component } from 'react'

import Navigation from '../../components/common/Navigation'
import TasksList from '../../components/task/TaskList'

import Cookies from 'universal-cookie'
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
                <Navigation />
                <TasksList />
            </>
        )
    }
}
