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

    capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    getVehicleList() {
        return (
          <span>
            {
                this.props.segments.map(segment => {
                    const vehicleList = this.props.vehicles
                    const segmentList = this.props.segments
                    const position = segmentList.indexOf(segment);
                    const segmentName = vehicleList[segmentList[position].vehicle].name

                    return this.capitalizeFirstLetter(segmentName) + " "
                }
                )}
          </span>

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
            routes={this.props.routes}
            capitalizeFirstLetter = {this.capitalizeFirstLetter} />
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
            <td>{this.getVehicleList()}</td>
            <td><time datetime={`${this.props.durationMinutes}M`}>{this.props.durationHours}</time></td>
            <td>{this.props.price + " " + this.props.currency}</td>
            <td className="hidden">{this.props.segments.length}</td>
            <td className="google-map- hidden"><img
                            alt="Google map icon"
                            title="Map Icon"
                            onClick={()=>{
                              let map = document.getElementById("map")
                              map.scrollIntoView({behavior: "smooth", inline: "nearest"});

                        }} src="/images/icons/googlemaps.png"></img></td>
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
