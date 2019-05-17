import React, { Component } from 'react'
import Segment from './Segment'
import './App.css'

class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expandMode: false
        }

        this.editExpandMode = this.editExpandMode.bind(this)
    }

    editExpandMode() {
        this.setState({
            expandMode: !this.state.expandMode
        })
    }

    

    render() {

        if (this.state.expandMode === false) {
            return (
                <tr className="routes" onClick={this.editExpandMode}>
                    <td>{this.props.departurePlace}</td>
                    <td>{this.props.arrivalPlace}</td>
                    <td>{
                        this.props.segments.map(segment => {
                            const vehicleList = this.props.vehicles
                            const segmentList = this.props.segments

                            return vehicleList[segmentList[segmentList.indexOf(segment)].vehicle].name + " "
                        }
                        )}
                    </td>
                    <td>{this.props.durationHours}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.distance}</td>
                    <td>{this.props.segments.length}</td>
                </tr>
            )
        } else {
            return (
                [<tr className="routes" onClick={this.editExpandMode}>
                    <td>{this.props.departurePlace}</td>
                    <td>{this.props.arrivalPlace}</td>
                    <td>{
                        this.props.segments.map(segment => {
                            const vehicleList = this.props.vehicles
                            const segmentList = this.props.segments

                            return vehicleList[segmentList[segmentList.indexOf(segment)].vehicle].name + " "
                        }
                        )}
                    </td>
                    <td>{this.props.durationHours}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.distance}</td>
                    <td>{this.props.segments.length}</td>
                </tr>,
                <tr className="segment">
                    <th>Departure Place</th>
                    <th>Arrival Place</th>
                    <th>Means of Travel</th>
                    <th>Transit Time</th>
                </tr>,

                <Segment
                    segments={this.props.segments}
                    places={this.props.places}
                    vehicles={this.props.vehicles}
                    minutesToHours ={this.props.minutesToHours} />


                ]
            )
        }
    }
}

export default Routes