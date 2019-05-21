import React, { Component } from 'react'
import Segment from './Segment'
import '../styles/App.css'

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

    getVehicleList() {
              return (
              <td>{
                  this.props.segments.map(segment => {
                      const vehicleList = this.props.vehicles
                      const segmentList = this.props.segments
                      const position = segmentList.indexOf(segment);

                      return vehicleList[segmentList[position].vehicle].name + " "
                  }
                  )}
              </td>
    )
  }

    render() {

        if (this.state.expandMode === false) {
            return (
                <tr className="routes" onClick={this.editExpandMode}>
                    <td>
                        <img className="black-triangle"
                        src={process.env.PUBLIC_URL + "/images/icons/triangle.png"}
                        alt="Black triangle"
                        title="Expand" />
                        {this.props.departurePlace.shortName}
                    </td>
                    <td>{this.props.arrivalPlace.shortName}</td>
                        {this.getVehicleList()}
                    <td>{this.props.durationHours}</td>
                    <td>{this.props.price}</td>
                    <td className="hidden">{this.props.distance} km</td>
                    <td className="hidden">{this.props.segments.length}</td>
                </tr>
            )
        } else {
            return (
                [<tr className="routes" onClick={this.editExpandMode}>
                    <td>
                    <img className="black-triangle"
                        src={process.env.PUBLIC_URL + "/images/icons/triangle-right.png"}
                        alt="Triangle pointing right"
                        title="Collapse" />
                        {this.props.departurePlace.shortName}
                    </td>
                    <td>{this.props.arrivalPlace.shortName}</td>
                          {this.getVehicleList()}
                    <td>{this.props.durationHours}</td>
                    <td>{this.props.price}</td>
                    <td className="hidden">{this.props.distance} km</td>
                    <td className="hidden">{this.props.segments.length}</td>
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
