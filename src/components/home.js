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
            console.log('OE');
            window.location.href="/organizer";
        }
    }

    render() {
            // <Router>
            //     <Navbar />
            //     <br/>
            //     <Switch>
            //         <Route path="/organizer/home" exact component={TasksList} />
            //         <Route path="/organizer/home/edit/:id" exact component={EditTask} />
            //         <Route path="/organizer/home/create" exact component={CreateTask} />
            //     </Switch>
            // </Router>
        return (
            <div className="mainPage">
                <Navbar />
                <br></br>
                <TasksList/>
            </div>
        )
    }
}