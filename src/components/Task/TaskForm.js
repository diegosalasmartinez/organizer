import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navigation from '../common/Navigation'

import { getTaskById } from '../../services/api/task'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: '',
            title: '',
            description: '',
            duration: 60,
            importance: 1,
            registration_date: new Date(),
            due_date: new Date()
        }
    }

    async componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
        if(this.props.id){
            const task = await getTaskById(this.props.id);
            const {_id, title, description, duration, importance} = task;
            const due_date = new Date(task.due_date);
            this.setState({_id:_id, title: title, description: description, duration: duration, importance: importance, due_date: due_date});
        }
    }

    handleChange = ({target}) => {
        let {name, value} = target;
        if(typeof this.state[name] === 'number') value = this.handleNumbers(name, value);
        this.setState({[name]: value});
    }
    
    handleNumbers = (name, value) => {
        if (name === "duration" && value === "") value = parseInt(0); 
        else value = parseInt(value);
        return value;
    }

    onChangeDate = (date)=>{
        this.setState({due_date: date});
    }

    backHome = ()=>{
        console.log(window.location.href);
        window.location.href="../../home";
    }

    onSubmit = e => {
        e.preventDefault();
        const newTask = {
            userId: cookies.get('id'),
            title: this.state.title,
            description: this.state.description,
            duration: this.state.duration,
            importance: this.state.importance,
            due_date: this.state.due_date
        };
        if(this.state._id) newTask.id = this.state._id;
        this.props.onSubmit(newTask);
    }

    render() {
        const state = this.state;
        return (
            <>
                <Navigation />
                <Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="nameInput">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" required name="title" placeholder="Eg. Became a Brawl Stars master" value={state.title} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="descriptionInput">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" required name="description" placeholder="Eg. Watch all Yde's videos" value={state.description} onChange={this.handleChange} />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} controlId="durationInput" md="6">
                                <Form.Label>Duration (in minutes)</Form.Label>
                                <Form.Control type="text" required name="duration" placeholder="60" value={state.duration} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="importanceRadios" md="6">
                                <Form.Label className="mb-3">Importance</Form.Label>
                                <div key="importanceRadios">
                                    <Form.Check custom inline type="radio" name="importance" id="importanceRadios-1" label="Low" value="1" checked={state.importance === 1} onChange={this.handleChange}/>
                                    <Form.Check custom inline type="radio" name="importance" id="importanceRadios-2" label="Medium" value="2" checked={state.importance === 2} onChange={this.handleChange}/>
                                    <Form.Check custom inline type="radio" name="importance" id="importanceRadios-3" label="High" value="3" checked={state.importance === 3} onChange={this.handleChange}/>
                                </div>
                            </Form.Group>
                        </Row>
                            <Form.Group controlId="dueDateInput">
                                <Form.Label>Due Date</Form.Label>
                                <div className="mb-5">
                                    <DatePicker className="py-1 px-2" name="due_date" selected={state.due_date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" minDate={new Date()} />
                                </div>
                            </Form.Group>
                            <Button className="mr-2" onClick={this.backHome}>Back</Button>
                            <Button type="submit">{this.props.textButton}</Button>
                    </Form>
                </Container>
            </>
        )
    }
}
