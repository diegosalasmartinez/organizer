import React, { Component } from 'react'
import Navigation from '../../components/common/Navigation'
import ChangePassword from './ChangePassword'
import Profile from './Profile'

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class Account extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <Container>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="Profile">
                            <Profile/>
                        </Tab>
                        <Tab eventKey="security" title="Security">
                            <ChangePassword/>
                        </Tab>
                    </Tabs>
                </Container>
            </>
        )
    }
}
