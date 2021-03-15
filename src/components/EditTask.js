import React, { Component } from 'react'
import CreateTask from './CreateTask'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class EditTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        return (
            <CreateTask id={this.props.match.params.id}/>
        )
    }
}
