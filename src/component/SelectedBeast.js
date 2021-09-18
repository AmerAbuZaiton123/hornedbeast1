import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'


class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.CloseModel}>
                <Modal.Header closeButton>
                    <Modal.Title>  {this.props.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.mSrc} thumbnail style={{height:'350px'}} /><br/>
                    {this.props.mDisc}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.CloseModel}>
                       close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast