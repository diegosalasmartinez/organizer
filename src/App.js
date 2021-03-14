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
      <Router basename="/organizer">
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/home/edit/:id" exact component={EditTask} />
            <Route path="/home/create" exact component={CreateTask} />
            <Route path="/register-user" exact component={CreateUser}/>
          </Switch>
      </Router>
    );
  }
}
