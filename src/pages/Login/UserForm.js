import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import validateFields from '../../Utils/userUtils'

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            username: '',
            password: '',            
            passwordConfirmation: '',
            errors: {
                name: "What's your name?",
                lastName: "What's your lastname?",
                email: "This username is not available",
                username: "Enter an valid email",
                password: "Your password must contain at least 8 letters",
                passwordConfirmation: "Your password must contain at least 8 letters",
            }            
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});

        const newErrors = this.state.errors;
        newErrors[name] = '';
        
        this.setState({errors: newErrors});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {errors, ...newUser} = this.state;

        const newErrors = await validateFields(newUser);

        if(!Object.keys(newErrors).length){
            this.props.createUser(newUser);
        } 
        this.setState({errors: newErrors});
    }

    render() {
        return (
            <Container>
                <br></br>
                <h3>Create New User</h3>
                <br></br>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="nameInput">
                            <Form.Label id="nameInput">Name</Form.Label>
                            <Form.Control type="text" required name="name" value={this.state.name} onChange={this.handleChange} isInvalid={this.state.errors.name}/>
                            <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="lastNameInput">
                            <Form.Label id="lastNameInput">Lastname</Form.Label>
                            <Form.Control type="text" required name="lastName" value={this.state.lastName} onChange={this.handleChange} isInvalid={this.state.errors.lastName}/>
                            <Form.Control.Feedback type="invalid">{this.state.errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="emailInput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required name="email" value={this.state.email} onChange={this.handleChange} isInvalid={this.state.errors.email}/>
                        <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="usernameInput">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" required name="username" value={this.state.username} onChange={this.handleChange} isInvalid={this.state.errors.username}/>
                        <Form.Control.Feedback type="invalid">{this.state.errors.username}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="passwordInput">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required name="password" value={this.state.password} onChange={this.handleChange} isInvalid={this.state.errors.password}/>
                            <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="passwordConfirmationInput">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" required name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} isInvalid={this.state.errors.passwordConfirmation}/>
                            <Form.Control.Feedback type="invalid">{this.state.errors.passwordConfirmation}</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <p>¿Have an account?<span> </span>
                        <Link to="./">Log in</Link>
                    </p>
                    <Button type="submit">Create User</Button>
                </Form>
            </Container>
        )
    }
}
