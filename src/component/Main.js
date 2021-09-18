
import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

class Main extends Component {

    render() {
        
       
        return (
            
            <div className="row" style={{margin :" 25px 110px"}}>
          {   this.props.data.map( e => {
                 return ( <HornedBeast Name={e.title} src={e.image_url} disc={e.description} show={this.props.show}    />)
            })
            }
            </div>
            
        )
    }
}

export default Main