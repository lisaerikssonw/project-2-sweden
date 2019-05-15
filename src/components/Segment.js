import React, { Component } from 'react'

class Segment extends Component {

    render() {
        return (
            this.props.segments.map(segment => {
                return ([
                    <tr className="segment">
                        <th>Departure Place</th>
                        <th>Arrival Place</th>
                        <th>Means of Travel</th>
                        <th>Transit Time</th>
                    </tr>,
                    <tr className="segment">
                        <td>{this.props.places[segment.depPlace].shortName}</td>
                        <td>{this.props.places[segment.arrPlace].shortName}</td>
                        <td>{this.props.vehicles[segment.vehicle].name}</td>
                        <td>{segment.transitDuration}</td>
                    </tr>
                ]
                )
            })
        )
    }

}
export default Segment