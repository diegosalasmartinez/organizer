import React, { Component } from 'react'
import Task from './Task'
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
            axios.get(`${process.env.REACT_APP_API}/tasks/${cookies.get('username')}`)
                .then(res => this.setState({tasks: res.data}))
                .catch(e => console.log(e));
        }
    }

    logout = ()=>{
        cookies.remove('username', {path: "/"});
        cookies.remove('password', {path: "/"});
        window.location.href='./';
    }
    
    deleteTask = (id) => {
        const ans = window.confirm('¿Está seguro de eliminar la tarea?');
        if(ans){
            axios.delete(`${process.env.REACT_APP_API}/tasks/${id}`)
                .then(res => { this.setState({tasks: this.state.tasks.filter(el => el._id !== id)}) })
                .catch(e => console.log(e));
            alert('¡Tarea eliminada!');
        }
    }
    
    finishTask = (id) => {
        const ans = window.confirm('¿Está seguro de marcar la tarea como completada?');
        if(ans){
            axios.delete(`${process.env.REACT_APP_API}/tasks/${id}`)
                .then(res => { this.setState({tasks: this.state.tasks.filter(el => el._id !== id)}) })
                .catch(e => console.log(e));
            alert('¡Tarea completada!');
        }
    }

    updateTask = (id) => {
        window.location.href='./home/edit/'+id;
    }

    tasksList = ()=>{
        return this.state.tasks.map(task => {
            return <Task task={task} deleteTask={this.deleteTask} updateTask={this.updateTask} finishTask={this.finishTask} key={task._id}/>
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome, {cookies.get('username')}</h1>
                <br></br>
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
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
                <button onClick={this.logout} className="btn btn-primary">Log out</button>
            </div>
        )
    }
}
