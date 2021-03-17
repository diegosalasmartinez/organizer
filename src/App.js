import React, { Component } from 'react'
import AppRouter from "./services/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}
