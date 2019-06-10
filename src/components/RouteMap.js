import React, { Component } from 'react'
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api'
const decodePolyline = require('decode-google-map-polyline');
require('dotenv').config();

const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;

const stockholm = new Coordinates(59.32932, 18.06858);



class RouteMap extends Component {
constructor(props){
  super(props)

    this.state = {
      animationValueDep:0,
      animationValueArr:0
    }

    this.changeAnimationDep = this.changeAnimationDep.bind(this)
    this.changeAnimationArr = this.changeAnimationArr.bind(this)
}

changeAnimationDep(){

  this.state.animationValueDep===1 ? this.setState({animationValueDep:0}) : this.setState({animationValueDep:1})


}
changeAnimationArr(){

  this.state.animationValueArr===1 ? this.setState({animationValueArr:0}) : this.setState({animationValueArr:1})

}



  render() {

    let index = this.props.routes.map(route => route.id).indexOf(this.props.mapValue)
    let route = this.props.routes[index];

    let departurePlace = route.departurePlace;
    let arrivalPlace = new Coordinates(route.places[route.segments[route.segments.length - 1].arrPlace].lat, route.places[route.segments[route.segments.length - 1].arrPlace].lng)

    return (
      <div id="map" className="map">
        <LoadScript
          id="script loader"
          googleMapsApiKey={googleKey}
        >
          <GoogleMap
            id="example-map"
            mapContainerStyle={{
              height: "60vh",
              width: "80vw"
            }}
            center={stockholm}
            zoom={3}
          >
            <Polyline
              path={getPosition(route)}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                editable: false,
                visible: true
              }}
            />
            <Marker
              onClick={this.changeAnimationDep}
              position={departurePlace}
              animation={this.state.animationValueDep}
            />
            <Marker
              onClick={this.changeAnimationArr}
              position={arrivalPlace}
              animation={this.state.animationValueArr}
            />

          </GoogleMap>
        </LoadScript>
      </div>
    )
  }

}
function Coordinates(latitude, longitude) {
  this.lat = latitude;
  this.lng = longitude;
}

function getPosition(route) {
  let departure = null;
  let arrival = null;
  let mapRoute = [];
  let surfaceRoute = [];


  route.segments.forEach(segment => {

    if (segment.segmentKind === "surface") {
      surfaceRoute = decodePolyline(segment.path)
      mapRoute = mapRoute.concat(surfaceRoute)
    } else if (segment.segmentKind === "air") {

      departure = new Coordinates(route.places[segment.depPlace].lat, route.places[segment.depPlace].lng);
      arrival = new Coordinates(route.places[segment.arrPlace].lat, route.places[segment.arrPlace].lng)
      mapRoute.push(departure)
      mapRoute.push(arrival)
    }
  })


  return mapRoute;
}


export default RouteMap;
