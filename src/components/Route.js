import React, { Component } from 'react'
import Segment from './Segment'
import '../styles/App.css'
import '../styles/route.css';

class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expandMode: false,
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
                    const segmentKind = vehicleList[segmentList[position].vehicle].kind
                    const name = segmentKind.charAt(0).toUpperCase() + segmentKind.slice(1)

                    return name + " "
                }
                )}
            </td>
        )
    }

    setRouteMap() {
        this.props.setMapValue(this.props.id)
    }


    render() {

        const segmentList = this.props.segments.map((segment, index)=> {return(
            <Segment {...segment} key={index} 
            places={this.props.places}
            vehicles={this.props.vehicles}
            minutesToHours={this.props.minutesToHours}
            routes={this.props.routes} />
        )})

        let routeClass = this.props.id === this.props.mapValue ? "marked-route" : "routes"
        
        const routeRow = (<tr className={routeClass} onClick={() => this.setRouteMap()}>
            <td>
                <img onClick={() => this.editExpandMode()} className="black-triangle"
                    src={this.state.expandMode ? "/images/icons/triangle.png" : "/images/icons/triangle-right.png"}
                    alt={this.state.expandMode ? "Triangle pointing down" : "Triangle pointing right"}
                    title={this.state.expandMode ? "Collapse" : "Expand"} />
                {this.props.departurePlace.shortName}
            </td>
            <td>{this.props.arrivalPlace.shortName} </td>
            {this.getVehicleList()}
            <td>{this.props.durationHours}</td>
            <td>{this.props.price + " " + this.props.currency}</td>
            <td className="hidden">{this.props.distance} km</td>
            <td className="hidden">{this.props.segments.length}</td>
        </tr>)

        if (this.state.expandMode === false) {
            return routeRow
        } else {
            return (
                [
                    routeRow,
                    <tr className="segment">
                        <th>Departure Place</th>
                        <th>Arrival Place</th>
                        <th>Means of Travel</th>
                        <th colSpan="4">Transit Time</th>
                    </tr>,
                    
                        segmentList
                ]
            )
        }
    }
}

export default Routes
