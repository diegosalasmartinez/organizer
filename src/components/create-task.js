import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            name: '',
            description: '',
            duration: 60,
            importance: 1,
            registration_date: new Date(),
            due_date: new Date()
        }
    }

    onChangeName = (e)=>{
        this.setState({name: e.target.value});
    }
    onChangeDescription = (e)=>{
        this.setState({description: e.target.value});
    }
    onChangeDuration = (e)=>{
        this.setState({duration: e.target.value});
    }
    onChangeImportance = (e)=>{
        this.setState({importance: Number(e.target.value)});
    }
    onChangeDueDate = (date)=>{
        this.setState({due_date: date});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const newTask = {
            username: this.state.username,
            name: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            importance: this.state.importance,
            registration_date: new Date(),
            due_date: this.state.due_date
        };
        console.log(newTask);
        Window.location = '/';
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h3>Create New Exercise Log</h3>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameInput">Title</label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            id="nameInput"
                            placeholder="Eg. Became a Brawl Stars master"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            id="descriptionInput"
                            placeholder="Eg. Watch all Trebor's videos"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="durationInput">Duration (in minutes)</label>
                        <input 
                            type="text" 
                            required
                            className="form-control"
                            id="durationInput"
                            placeholder="60"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Importance</label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importanceRadios" id="importanceRadios1" value="1" onChange={this.onChangeImportance} defaultChecked/>
                            <label className="form-check-label" htmlFor="importanceRadios1">
                                Low
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importanceRadios" id="importanceRadios2" value="2" onChange={this.onChangeImportance}/>
                            <label className="form-check-label" htmlFor="importanceRadios2">
                                Medium
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importanceRadios" id="importanceRadios3" value="3" onChange={this.onChangeImportance}/>
                            <label className="form-check-label" htmlFor="importanceRadios3">
                                High
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDateInput">Due Date</label>
                        <div>
                            <DatePicker 
                                id="dueDateInput"
                                selected={this.state.due_date} 
                                onChange={this.onChangeDueDate}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create Task Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
