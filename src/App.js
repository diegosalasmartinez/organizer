import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login"
import Home from "./components/home"

require('dotenv').config();

export default class App extends Component {
  async componentDidMount(){
    // const res = await fetch(process.env.REACT_APP_API + '/customers/paginated?page=1&limit=15');
    // const data = await res.json();
    // console.log(data);
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
          </Switch>
      </Router>
    );
  }
}
