import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

export default class Task extends Component {
    updateTask = () => {
        this.props.updateTask(this.props.task._id);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task._id);
    }
    
    finishTask = () => {
        this.props.finishTask(this.props.task._id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.description}</td>
                <td>{this.props.task.duration}</td>
                <td>{this.props.task.importance}</td>
                <td>{(this.props.task.due_date).slice(0,10)}</td>
                <td>
                    <FontAwesomeIcon onClick={this.updateTask} icon={faPen} />
                    <span>   </span>
                    <FontAwesomeIcon onClick={this.finishTask} icon={faCheck} />
                    <span>   </span>
                    <FontAwesomeIcon onClick={this.deleteTask} icon={faTrashAlt} />
                    <span>   </span>
                </td>
            </tr>
        )
    }
}
