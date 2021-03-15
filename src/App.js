import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login"
import Home from "./components/Home"
import CreateUser from "./components/CreateUser";
import EditTask from "./components/EditTask";
import CreateTask from "./components/CreateTask";

export default class App extends Component {
  render() {
    return (
      <Router basename="/organizer">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/home/edit/:id" exact component={EditTask} />
            <Route path="/home/create" exact component={CreateTask} />
            <Route path="/register-user" exact component={CreateUser} />
          </Switch>
      </Router>
    );
  }
}
