import React, {Component} from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
require('dotenv').config();

const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;

<<<<<<< HEAD
=======
// Stockholm is used for centring the map
// Other cities for debugging
const dubai = new Coordinates(25.20485, 55.27078);
>>>>>>> 9aa44132f0057b851acb6a5603ff60f7f54ac09d
const stockholm = new Coordinates(59.32932, 18.06858);

let mapRoute = [];






<<<<<<< HEAD
// console.log(dubai);
// console.log(stockholm);
// console.log(paris);




=======
>>>>>>> 9aa44132f0057b851acb6a5603ff60f7f54ac09d
class RouteMap extends Component {


<<<<<<< HEAD
  render() {
=======
    const route = this.props.routes[0];
    let departure = new Coordinates(route.departurePlace.lat, route.departurePlace.lng);
    let destination = new Coordinates(route.arrivalPlace.lat, route.arrivalPlace.lng);
>>>>>>> 9aa44132f0057b851acb6a5603ff60f7f54ac09d

    const route = this.props.routes[this.props.mapValue]; // r === routes
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
