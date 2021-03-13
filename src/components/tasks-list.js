import React, { Component } from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class TasksList extends Component {
    logout = ()=>{
        cookies.remove('username', {path: "/"});
        cookies.remove('password', {path: "/"});
        window.location.href='./';
    }

    render() {
        return (
            <div className="container">
                <h1>Bienvenido(a), {cookies.get('username')}</h1>
                <br></br>
                <button onClick={this.logout} className="btn btn-primary">Cerrar Sesion</button>
            </div>
        )
    }
}
