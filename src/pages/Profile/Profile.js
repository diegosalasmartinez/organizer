import React, { Component } from 'react'
import Navbar from '../../components/common/Navbar'

export default class Profile extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="container">
                    NEW BRANCH - THIS IS THE NEW PROFILE
                </div>
            </>
        )
    }
}