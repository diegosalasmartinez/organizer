import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../common/Navbar'
import Cookies from 'universal-cookie';
import axios from 'axios';

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
            await axios.get(`${process.env.REACT_APP_API}/tasks/byId/${this.props.id}`)
            .then(res => {
                    const {_id, title, description, duration, importance} = res.data;
                    const due_date = new Date(res.data.due_date);
                    this.setState({_id:_id, title: title, description: description, duration: duration, importance: importance, due_date: due_date}) 
                })
                .catch(e => console.log(e));
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
        return (
            <>
                <Navbar />
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="nameInput">Title</label>
                            <input type="text" required className="form-control" id="nameInput" name="title" placeholder="Eg. Became a Brawl Stars master" value={this.state.title} onChange={this.handleChange} />
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
                                <input className="form-check-input" type="radio" name="importance" id="importanceRadios1" value="1" checked={this.state.importance === 1} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="importanceRadios1">Low</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="importance" id="importanceRadios2" value="2" checked={this.state.importance === 2} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="importanceRadios2">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="importance" id="importanceRadios3" value="3" checked={this.state.importance === 3} onChange={this.handleChange}/>
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
                            <button type="button" className="btn btn-primary mr-2" onClick={this.backHome}>Back</button>
                            <input type="submit" value={this.props.textButton} className="btn btn-primary" />
                        </div>
                        <div className="form-group">
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
