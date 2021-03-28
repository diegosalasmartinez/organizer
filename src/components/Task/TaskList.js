import React, { Component } from 'react'
import Task from './Task'
import { sortingTasks } from '../../Utils/taskUtils'
import axios from 'axios';
import Cookies from 'universal-cookie'

require('dotenv').config();
const cookies = new Cookies();

export default class TasksList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
        else{
            axios.get(`${process.env.REACT_APP_API}/tasks/${cookies.get('id')}`)
                .then(res => {
                    if(res.data.length > 0){
                        sortingTasks(res.data);
                        this.setState({tasks: res.data});
                    }
                    else{
                        this.setState({tasks: []})
                    }
                })
                .catch(e => console.log(e));
        }
    }
    
    deleteTask = (id) => {
        const ans = window.confirm('¿Are you sure you want to delete this task?');
        if(ans){
            axios.delete(`${process.env.REACT_APP_API}/tasks/${id}`)
                .then(res => { this.setState({tasks: this.state.tasks.filter(el => el._id !== id)}) })
                .catch(e => console.log(e));
            alert('Task deleted!');
        }
    }
    
    finishTask = (id) => {
        const ans = window.confirm('¿Are you sure you want complete this task?');
        if(ans){
            axios.delete(`${process.env.REACT_APP_API}/tasks/${id}`)
                .then(res => { this.setState({tasks: this.state.tasks.filter(el => el._id !== id)}) })
                .catch(e => console.log(e));
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
            <div className="container">
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
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
                    </table>
                </div>
            </div>
        )
    }
}
