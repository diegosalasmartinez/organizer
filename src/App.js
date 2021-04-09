import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './services/AppRouter'

export default class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}
