import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./Navbar"
import TaskForm from "./TaskForm"
import Cookies from 'universal-cookie';

require('dotenv').config();
const cookies = new Cookies();

export default class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            duration: 60,
            importance: 1,
            registration_date: new Date(),
            due_date: new Date()
        }
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
        if(this.props.id){
            console.log('ESTAMOS EN EDITAR');
        }
        else{
            console.log('ESTAMOS EN CREAR');
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value, userFailed: false});
    }

    onChangeDate = (date)=>{
        this.setState({due_date: date});
    }

    createTask = (newTask) => {
        axios.post(`${process.env.REACT_APP_API}/tasks/add`,newTask)
            .then(res => {
                console.log(res.data);
                window.location.href="./";
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="mainPage">
                <Navbar />
                <br></br>
                <TaskForm onSubmit={this.createTask} textButton={"Create Task"}/>
            </div>
        )
    }
}