import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            newPassword: "",
            confirmPassword: "",
            showChangaPassword: false
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('UPDATING PASSWORD');
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    toggleShowChangePassword = () => {
        this.setState({showChangaPassword: !this.state.showChangaPassword});
    } 

    render() {
        return (
            <Container className="mt-4">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="passwordInput">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="password" required name="password" placeholder="You're actual password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="newPasswordInput">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" required name="newPassword" placeholder="You're new password" value={this.state.newPassword} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="confirmPasswordInput">
                        <Form.Label>Confirm your Password</Form.Label>
                        <Form.Control type="password" required name="confirmPassword" placeholder="Confirm your password" value={this.state.confirmPassword} onChange={this.handleChange} />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
