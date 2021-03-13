import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Navbar from "./navbar"
import TasksList from "./tasks-list";
import EditTask from "./edit-task";
import CreateTask from "./create-task";

const cookies = new Cookies();

export default class Home extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="/organizer";
        }
    }

    render() {
        return (
            <Router>
                <Navbar />
                <br/>
                <Switch>
                    <Route path="/home" exact component={TasksList} />
                    <Route path="/home/edit/:id" exact component={EditTask} />
                    <Route path="/home/create" exact component={CreateTask} />
                </Switch>
            </Router>
        )
    }
}
