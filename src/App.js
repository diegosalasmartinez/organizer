import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar"
import TasksList from "./components/tasks-list";
import EditTask from "./components/edit-task";
import CreateTask from "./components/create-task";
import CreateUser from "./components/create-user";

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
          <Navbar />
          <br/>
          <Route path="/" exact component={TasksList} />
          <Route path="/edit/:id" component={EditTask} />
          <Route path="/create" component={CreateTask} />
          <Route path="/user" component={CreateUser} />
      </Router>
    );
  }
}
