import React, { Component } from 'react'
class Segment extends Component {
    

    render() {
        return (
            this.props.segments.map(segment => {
                return ([

                    <tr className="segment">
                        <td className="tabledata-style">{this.props.places[segment.depPlace].shortName}</td>
                        <td className="tabledata-style">{this.props.places[segment.arrPlace].shortName}</td>
                        <td className="tabledata-style">{this.props.vehicles[segment.vehicle].name}</td>
                        <td className="tabledata-style">{this.props.minutesToHours(segment.transitDuration)}</td>
                    </tr>  
                ]
                )
            })
        )
    }

}
export default Segment
