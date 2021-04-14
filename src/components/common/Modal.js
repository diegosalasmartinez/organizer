import React, { Component } from 'react'

import ModalBootstrap from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class Modal extends Component {

    handleClose = () => this.props.closeModal();
    handleAccept = () => this.props.acceptModal();

    render() {
        return (
            <ModalBootstrap show={this.props.showModal} onHide={this.handleClose}>
                <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title>Modal heading</ModalBootstrap.Title>
                </ModalBootstrap.Header>
                <ModalBootstrap.Body>Woohoo, you're reading this text in a modal!</ModalBootstrap.Body>
                <ModalBootstrap.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleAccept}>
                        Save Changes
                    </Button>
                </ModalBootstrap.Footer>
            </ModalBootstrap>
        )
    }
}
