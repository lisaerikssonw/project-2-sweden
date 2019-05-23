import React, {Component} from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
require('dotenv').config();

const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;

const stockholm = new Coordinates(59.32932, 18.06858);



class RouteMap extends Component {


  render() {

    let index = this.props.routes.map(route => route.id).indexOf(this.props.mapValue)
    let route = this.props.routes[index]; 

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
  let mapRoute = [];
  route.segments.map(segment=>{
    
    if(arrival === null){
      departure = new Coordinates(route.places[segment.depPlace].lat, route.places[segment.depPlace].lng);
      
      }else {
        departure = arrival;
      }

      arrival = new Coordinates(route.places[segment.arrPlace].lat, route.places[segment.arrPlace].lng)
      mapRoute.push(departure);
      mapRoute.push(arrival);

  })
  console.log(mapRoute)
  return mapRoute;
}


export default RouteMap;
