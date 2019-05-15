import React, { Component } from 'react'

class Routes extends Component {


    render() {
        return(
            <tr>
                <td>{this.props.depPlace}</td>
                <td>{this.props.arrPlace}</td>
                <td>{
                        this.props.segments.map(v => {
                        return this.props.vehicles[this.props.segments[this.props.segments.indexOf(v)].vehicle].name + " "
                        }
                    )}
                </td>
                <td>{this.props.totalDuration}</td>
                <td>{this.props.price}</td>
                <td>{this.props.distance}</td>
                <td>{this.props.segments.length}</td>
            </tr>
        )
    }
}

export default Routes