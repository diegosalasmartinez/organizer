import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faPen, faStar } from '@fortawesome/free-solid-svg-icons'
import { showDateAsString } from '../Utils/taskUtils'

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
    
    showImportance = () => {
        const nStars = this.props.task.importance;
        return Array.apply(null, Array(nStars)).map((e,i) => {
            return <FontAwesomeIcon key={i} icon={faStar} />
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.description}</td>
                <td>{this.props.task.duration}</td>
                <td>{this.showImportance()}</td>
                <td>{showDateAsString(new Date(this.props.task.due_date))}</td>
                <td>
                    <FontAwesomeIcon key={1} onClick={this.updateTask} icon={faPen} />
                    <span>   </span>
                    <FontAwesomeIcon key={2} onClick={this.finishTask} icon={faCheck} />
                    <span>   </span>
                    <FontAwesomeIcon key={3} onClick={this.deleteTask} icon={faTrashAlt} />
                    <span>   </span>
                </td>
            </tr>
        )
    }
}
