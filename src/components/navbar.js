import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link to="/home" className="navbar-brand">Organizer</Link>
                    <div className="collpase navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/home" className="nav-link">Tasks</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/home/create" className="nav-link">Create Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
