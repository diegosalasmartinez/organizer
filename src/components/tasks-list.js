import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie'

require('dotenv').config();
const cookies = new Cookies();

export default class TasksList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
        else{
            console.log('Mostrando las tareas de '+cookies.get('username'));
            axios.get(`${process.env.REACT_APP_API}/tasks/${cookies.get('username')}`)
                .then(res => console.log(res));
        }
    }

    logout = ()=>{
        cookies.remove('username', {path: "/"});
        cookies.remove('password', {path: "/"});
        window.location.href='./';
    }

    render() {
        return (
            <div className="container">
                <h1>Bienvenid@, {cookies.get('username')}</h1>
                <br></br>
                <button onClick={this.logout} className="btn btn-primary">Cerrar Sesion</button>
            </div>
        )
    }
}
