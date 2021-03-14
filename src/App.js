import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login"
import Home from "./components/home"
import CreateUser from "./components/create-user";
import EditTask from "./components/edit-task";
import CreateTask from "./components/create-task";


export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/organizer" exact component={Login}/>
            <Route path="/organizer/home" exact component={Home}/>
            <Route path="/organizer/home/edit/:id" exact component={EditTask} />
            <Route path="/organizer/home/create" exact component={CreateTask} />
            <Route path="/organizer/create-user" exact component={CreateUser}/>
          </Switch>
      </Router>
    );
  }
}
