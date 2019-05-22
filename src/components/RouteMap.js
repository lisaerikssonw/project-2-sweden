import React, {Component} from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
require('dotenv').config();

const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;

const stockholm = new Coordinates(59.32932, 18.06858);

let mapRoute = [];






// console.log(dubai);
// console.log(stockholm);
// console.log(paris);




class RouteMap extends Component {


  render() {

    const route = this.props.routes[3]; // r === routes
    console.log(route)
        return (

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
                zoom={2}
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

              </GoogleMap>
          </LoadScript>

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

  route.segments.map(segment=>{
    if(arrival === null){
      departure = new Coordinates(route.places[segment.depPlace].lat, route.places[segment.depPlace].lng);
      arrival = new Coordinates(route.places[segment.arrPlace].lat, route.places[segment.arrPlace].lng)
      mapRoute.push(departure);
      mapRoute.push(arrival);
      }else {
        departure = arrival;
        arrival = new Coordinates(route.places[segment.arrPlace].lat, route.places[segment.arrPlace].lng)
        mapRoute.push(departure);
        mapRoute.push(arrival);
      }

  })

  console.log(mapRoute)
  return mapRoute;
}


export default RouteMap;
