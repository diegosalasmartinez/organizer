import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from '../pages/Login/Login'
import CreateUser from '../pages/Login/CreateUser'
import Home from '../pages/Home/Home'
import EditTask from '../pages/Home/EditTask'
import CreateTask from '../pages/Home/CreateTask'
import Profile from '../pages/Profile/Profile'

export default class AppRouter extends Component {
  render() {
    return (
      <Router basename="/organizer">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/edit/:id" exact component={EditTask} />
          <Route path="/home/create" exact component={CreateTask} />
          <Route path="/home/profile" exact component={Profile} />
          <Route path="/register-user" component={CreateUser} />
        </Switch>
      </Router>
    );
  }
}
