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
      animationOn:true,
      animationValueDep:1,
      animationValueArr:1
    }

    this.changeAnimation = this.changeAnimation.bind(this)
}

changeAnimation(animationValue){


  animationValue === 1 ? this.setState({animationValue:0}) : this.setState({animationValue:1})
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
              height: "400px",
              width: "800px"
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
              onClick={this.changeAnimation}
              position={departurePlace}
              animation={this.state.animationValueDep}
            />
            <Marker
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

function getArrival(route){

  let arrival = null;
  route.segments.map(segment => {

      arrival = new Coordinates(route.places[segment.arrPlace].lat, route.places[segment.arrPlace].lng);
  
    })
    return arrival;
}

function getPosition(route) {
  let departure = null;
  let arrival = null;
  let mapRoute = [];
  let surfaceRoute = [];


  route.segments.map(segment => {

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



