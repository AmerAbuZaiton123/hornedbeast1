
import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Data from './data.json';
import { Form, Col } from 'react-bootstrap';

class Main extends Component {

    changForm = (e) => {
        let allData = Data;
        let filteredData = []
        let aniHorns = Number(e.target.value);
        filteredData = allData.filter(h => {

            return (h.horns === aniHorns)

        })
        console.log(filteredData)
        if (filteredData.length === 0) {
            filteredData = Data;
        }
        console.log(filteredData)
        this.props.showHorns(filteredData)

    }
    render() {
        return (

            <div className="row" style={{ margin: "20px 5%" }}>

                < Form horizontal
                    style={{ margin: "10px 20%" }}
                >
                    <Form.Group
                        controlId="formBasicEmail"
                        style={{ margin: "10px 20%" }}

                    >
                        <Col sm={4}  >
                            <Form.Select size="sm" onChange={this.changForm}>
                                <option value="">choose Number of horns</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form >
                {
                    this.props.data.map(e => {
                        return (<HornedBeast Name={e.title} src={e.image_url} disc={e.description} show={this.props.show} />)
                    })

                }
            </div>

        )
    }
}

export default Main