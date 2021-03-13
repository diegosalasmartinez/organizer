import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link to="/organizer/home" className="navbar-brand">Organizer</Link>
                    <div className="collpase navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/organizer/home" className="nav-link">Tasks</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/organizer/home/edit/:id" className="nav-link">Edit Task</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/organizer/home/create" className="nav-link">Create Task Log</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
