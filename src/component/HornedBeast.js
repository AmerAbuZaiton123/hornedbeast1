import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends react.Component {
   
   constructor(props)
   {
       super(props)
       this.state={
           Like:0
       }
   }
   
   NumberLike=()=>
   { this.setState({ Like:this.state.Like+1
   })}
    render() {
   
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url}/>
                    <Card.Body>
                        <Card.Title>{this.props.title }</Card.Title>
                        <Card.Text>
                           {this.props.description}
                        </Card.Text>
                        <Card.Title>{this.state.Like }</Card.Title>
                        
                        <Button variant="primary" onClick={this.NumberLike} >like</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}
export default HornedBeast