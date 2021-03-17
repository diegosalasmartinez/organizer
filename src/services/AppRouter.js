import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../pages/Login"
import Home from "../pages/Home"
import CreateUser from "../pages/CreateUser";
import EditTask from "../pages/EditTask";
import CreateTask from "../pages/CreateTask";

export default class AppRouter extends Component {
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
