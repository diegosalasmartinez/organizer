import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login"
import Home from "./components/home"
import CreateUser from "./components/create-user";

export default class App extends Component {
  render() {
    // <div>HOLA</div>
    return (
      <Router>
          <Switch>
            <Route path="/organizer" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/create-user" exact component={CreateUser}/>
          </Switch>
      </Router>
    );
  }
}
