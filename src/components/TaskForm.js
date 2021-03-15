import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class TaskForm extends Component {
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
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value, userFailed: false});
    }

    onChangeDate = (date)=>{
        this.setState({due_date: date});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const newTask = {
            username: cookies.get('username'),
            name: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            importance: this.state.importance,
            registration_date: new Date(),
            due_date: this.state.due_date
        };
        this.props.onSubmit(newTask);
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
                        <input type="text" required className="form-control" id="nameInput" name="name" placeholder="Eg. Became a Brawl Stars master" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input type="text" required className="form-control" id="descriptionInput" name="description" placeholder="Eg. Watch all Trebor's videos" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="durationInput">Duration (in minutes)</label>
                        <input type="text" required className="form-control" id="durationInput" name="duration" placeholder="60" value={this.state.duration} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Importance</label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importance" id="importanceRadios1" value="1" onChange={this.handleChange} defaultChecked/>
                            <label className="form-check-label" htmlFor="importanceRadios1">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importance" id="importanceRadios2" value="2" onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="importanceRadios2">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="importance" id="importanceRadios3" value="3" onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="importanceRadios3">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDateInput">Due Date</label>
                        <div>
                            <DatePicker id="dueDateInput" name="due_date" selected={this.state.due_date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" minDate={new Date()} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value={this.props.textButton} className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
