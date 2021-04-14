import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { login } from '../../services/api/user-api'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            requestAccess: false,
            userFailed: false
        }
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./home";
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value, userFailed: false});
    }
    
    login = async (e) => {
        e.preventDefault();
        this.setState({requestAccess: true});
        const { username, password} = this.state;
        const data = await login(username, password);
        
        if(data.length === 1){
            const myUser = data[0];
            cookies.set('id',myUser._id, {path: "/"});
            cookies.set('username',myUser.username, {path: "/"});
            cookies.set('name',myUser.name, {path: "/"});
            cookies.set('lastName',myUser.lastName, {path: "/"});
            cookies.set('email',myUser.email, {path: "/"});
            window.location.href="./home";
        }
        else{
            this.setState({userFailed: true, requestAccess: false});
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="8" lg="6" className="my-4">
                        <h3>Login</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="8" lg="6">
                        <Form onSubmit={this.login}>
                            <Form.Group controlId="usernameInput">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" required name="username" value={this.state.username} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="passwordInput">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required name="password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>
                            {this.state.userFailed && <Alert variant={'danger'}>User and password don't match!</Alert>}
                            <p>¿Don't have an account?<span> </span><Link to="./register-user">Sign up</Link></p>
                            <Button type="submit" disabled={this.state.requestAccess}>
                                { this.state.requestAccess && <Spinner className="mr-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" /> }
                                Enter
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
