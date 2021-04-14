import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Cookies from 'universal-cookie'
const cookies = new Cookies();


export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            email: "",
            password: "",
            newPassword: ""
        }
    }

    componentDidMount(){
        cookies.get('username');
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('UPDATING DATA');
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <Container className="mt-4">
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} sm="6" controlId="nameInput">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" required name="name" placeholder="You're name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} sm="6" controlId="lastNameInput">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" required name="lastName" placeholder="My last name" value={this.state.lastName} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="emailInput" className="mb-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required name="email" placeholder="myemail@gmail.com" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
