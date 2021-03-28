import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class Navbar extends Component {

    logout = (e) => {
        e.preventDefault();
        console.log('EXIT');
        cookies.remove('username', {path: "/"});
        cookies.remove('password', {path: "/"});
        window.location.href="./";
    }

    render() {
        return (
            <>
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
                                <li className="navbar-item">
                                    <Link to="/home/profile" className="nav-link">Profile</Link>
                                </li>
                            </ul>
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <button onClick={this.logout} className="btn btn-outline-success">Log out</button>
                        </form>
                    </div>
                </nav>
                <br></br>
            </>
        )
    }
}
