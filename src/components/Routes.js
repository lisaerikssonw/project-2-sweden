import React, {Component} from 'react'

class Routes extends Component {

    render() {
        return this.props.routes.map(r => 
                <tr>
                    <td>{r.depPlace}</td>
                    <td>{r.arrPlace}</td>
                    <td>{
                        r.segments.map( v =>{
                            return r.vehicles[r.segments[r.segments.indexOf(v)].vehicle].name + " "
                        }

                        )


                    }</td>
                    <td>{r.totalDuration}</td>
                    <td>{r.price}</td>
                    <td>{r.distance}</td>
                    <td>{r.segments.length}</td>   
                </tr>
        )
        
    }
}

export default Routes