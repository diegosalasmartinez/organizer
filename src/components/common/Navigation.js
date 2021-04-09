import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class Navigation extends Component {

    logout = (e) => {
        e.preventDefault();
        cookies.remove('id', {path: "/"});
        cookies.remove('username', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('lastName', {path: "/"});
        cookies.remove('email', {path: "/"});
        window.location.href="./";
    }

    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark" className="mb-4">
                    <Container>
                        <Link to="/home" className="navbar-brand">Organizer</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                        <Link to="/home" className="nav-link">Tasks</Link>
                                        <Link to="/home/create" className="nav-link">Create Task</Link>
                                        <Link to="/home/account" className="nav-link">My Account</Link>
                            </Nav>
                            <Form inline>
                                <Button variant="secondary" onClick={this.logout}>Log out</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
