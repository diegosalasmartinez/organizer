import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Task from './Task'

import { getTasksByUserId, deleteTask } from '../../services/api/tasks'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class TasksList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    async componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
        else{
            const tasks = await getTasksByUserId(cookies.get('id'));
            this.setState({tasks: tasks});
        }
    }
    
    deleteTask = async (id) => {
        const ans = window.confirm('Are you sure you want to delete this task?');
        if(ans){
            const res = await deleteTask(id);
            this.setState({tasks: this.state.tasks.filter(el => el._id !== id)})
            alert('Task deleted!');
        }
    }
    
    finishTask = async (id) => {
        const ans = window.confirm('Are you sure you want complete this task?');
        if(ans){
            const res = await deleteTask(id);
            this.setState({tasks: this.state.tasks.filter(el => el._id !== id)})
            alert('Task completed!');
        }
    }

    updateTask = (id) => {
        window.location.href='./home/edit/'+id;
    }

    tasksList = () => {
        return this.state.tasks.map(task => {
            return <Task task={task} deleteTask={this.deleteTask} updateTask={this.updateTask} finishTask={this.finishTask} key={task._id}/>
        })
    }

    render() {
        return (
            <Container>
                <Table responsive="sm" striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Time</th>
                            <th scope="col">Imp</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.tasksList()}
                        </tbody>
                </Table>
            </Container>
        )
    }
}
