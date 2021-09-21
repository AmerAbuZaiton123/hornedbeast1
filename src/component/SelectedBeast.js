import React, { Component } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'


class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>  {this.props.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.mSrc} thumbnail style={{height:'300px'}} /><br/>
                    {this.props.mDisc}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                       close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast