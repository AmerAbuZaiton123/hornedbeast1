import react from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast'

class Main extends react.Component
{
    render()
    {
        return(
            <div>
            {    data.map(e =>
                {
                    return (<HornedBeast image_url={e.image_url} title={e.title}   description={e.description}  />)
                })
            }      
            </div>
  


        )
    }

}
export default  Main