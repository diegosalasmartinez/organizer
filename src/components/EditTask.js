import React, { Component } from 'react'

import Navbar from "./Navbar"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class EditTask extends Component {
    componentDidMount() {
        if(!cookies.get('username')){
            console.log('OE');
            window.location.href="/";
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <br></br>
                You're in EditTask
            </div>
        )
    }
}
