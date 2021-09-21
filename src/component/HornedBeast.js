import React, { Component } from 'react'
import { Button, Col, Card } from 'react-bootstrap';

export class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Like1: 0,
        }
    }
    getHandleOpen = () => {
        let name = this.props.Name
        let mSrc = this.props.src;
        let mdisc = this.props.disc
        this.props.show(name,mSrc, mdisc);

    }

    imageClick = () => {
        this.setState({
            Like1: this.state.Like1 + 1
        })
    }
    render() {

        return (

            <Col>
                <Card style={{ width: '18rem', margin: "20px" }} >
                    <Card.Img alt='HornedBeast' class="card-img-top" title={this.props.Name} src={this.props.src} 
                    onClick={this.imageClick} />
                    <Card.Body>
                        <Card.Title>{this.props.Name}</Card.Title>
                        
                           
                    
                        <Card.Text> 
                            Likes {this.state.Like1}
                            <br/>
                            {this.props.disc}
                        </Card.Text>


                        <Button variant="primary" onClick={this.getHandleOpen}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>


        )
    }
}

export default HornedBeast