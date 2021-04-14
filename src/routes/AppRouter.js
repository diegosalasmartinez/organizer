import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from '../pages/login/Login'
import CreateUser from '../pages/login/CreateUser'
import Home from '../pages/home/Home'
import EditTask from '../pages/home/EditTask'
import CreateTask from '../pages/home/CreateTask'
import Account from '../pages/account/Account'

export default class AppRouter extends Component {
  render() {
    return (
      <Router basename="/organizer">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/edit/:id" exact component={EditTask} />
          <Route path="/home/create" exact component={CreateTask} />
          <Route path="/home/account" exact component={Account} />
          <Route path="/register-user" component={CreateUser} />
        </Switch>
      </Router>
    );
  }
}
