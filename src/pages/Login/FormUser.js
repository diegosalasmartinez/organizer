import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import validateFields from '../../Utils/userUtils'

export default class FormUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            username: '',
            password: '',            
            passwordConfirmation: '',
            users: [],            
            errors: {
                name: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                passwordConfirmation: '',
            }
        }
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API}/users`)
        .then(res => {
            const usernames = res.data.map( function(obj){ return obj["username"] })
            this.setState({users: usernames});
        })
        .catch(e => console.log(e));
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
        const newErrors = this.state.errors;
        newErrors[name] = '';
        this.setState({errors: newErrors});
    }

    showError = (field) => {
        if(this.state.errors[field]){
            return <p style={{color: "red"}}>{this.state.errors[field]}</p>
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const {users, ...withoutUsers} = this.state;
        const {errors, ...newUser} = withoutUsers;
        const newErrors = validateFields(newUser,users);
        
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
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="nameInput">
                            <Form.Label htmlFor="nameInput">Name</Form.Label>
                            <Form.Control type="text" required name="name" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                        {this.showError("name")}
                        <Form.Group as={Col} md="6" controlId="lastNameInput">
                            <Form.Label htmlFor="lastNameInput">Lastname</Form.Label>
                            <Form.Control type="text" required name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </Form.Group>
                        {this.showError("lastName")}
                    </Form.Row>
                    <Form.Group controlId="emailInput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    {this.showError("email")}
                    <Form.Group controlId="usernameInput">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" required name="username" value={this.state.username} onChange={this.handleChange}/>
                    </Form.Group>
                    {this.showError("username")}
                    <Form.Group controlId="passwordInput">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    {this.showError("password")}
                    <Form.Group controlId="passwordConfirmationInput">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" required name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    </Form.Group>
                    {this.showError("passwordConfirmation")}
                    <p>¿Have an account?<span> </span><Link to="./">Log in</Link></p>
                    <br></br>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>Create User</Button>
                </Form>
            </Container>
        )
    }
}
