import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'

import Task from './Task'
import Modal from '../common/Modal'

import { getTasksByUserId, deleteTask } from '../../services/api/task-api'
import optionModals from '../common/optionModals'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class TasksList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            tasksLoaded: false,
            modal : {
                id: 0,
                option: '',
                titleModal: '',
                bodyModal: ''
            },
            showModal: false
        }
    }

    async componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
        else{
            const tasks = await getTasksByUserId(cookies.get('id'));
            this.setState({tasks: tasks, dataLoaded: true});
        }
    }
    
    showModal = (option, id) => {
        this.setState({showModal: true});
        this.setState(prevState => ({
            modal: {                   
                ...prevState.modal, id: id, option: option      
            }
        }));
        console.log(this.state.modal)
    }

    acceptModal = () => {
        this.setState({showModal: false});
        if(this.state.modal.option === optionModals.DELETE) this.deleteTask(this.state.modal.id);
        if(this.state.modal.option === optionModals.UPDATE) this.updateTask(this.state.modal.id);
    }

    closeModal = () => {
        this.setState({showModal: false});
        this.setState({modal: { id: 0, option: '', titleModal: '', bodyModal: ''}});
    }

    deleteTask = async (id) => {        
        await deleteTask(id);
        this.setState({tasks: this.state.tasks.filter(el => el._id !== id)});  
        //show notification
        //add finish task
    }
    
    finishTask = async (id) => {
        await deleteTask(id);
        this.setState({tasks: this.state.tasks.filter(el => el._id !== id)});
    }

    updateTask = (id) => {
        window.location.href='./home/edit/'+id;
    }

    tasksList = () => {
        return this.state.tasks.map(task => {
            return <Task task={task} showModal={this.showModal} key={task._id}/>
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
                <Row className="justify-content-md-center">
                    { !this.state.dataLoaded && <Spinner animation="border" /> }
                </Row>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal} acceptModal={this.acceptModal}/>
            </Container>
        )
    }
}
