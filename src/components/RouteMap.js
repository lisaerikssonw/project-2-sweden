import React, {Component} from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
require('dotenv').config();

const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;

const dubai = new Coordinates(25.20485, 55.27078);
const stockholm = new Coordinates(59.32932, 18.06858);
const paris = new Coordinates(48.85661, 2.35222);

// console.log(dubai);
// console.log(stockholm);
// console.log(paris);

class RouteMap extends Component {

  render() {

    let destination = '';
    let departure = '';
    const list = this.props.routes
        list.forEach(r => {

            departure = new Coordinates(r.departurePlace.lat, r.departurePlace.lng);
            destination = new Coordinates(r.arrivalPlace.lat, r.arrivalPlace.lng);

        });


      if (!destination)
      console.log("den är false!")
      else {
        console.log("den är true!")
        console.log("destination = " + JSON.stringify(destination));
        console.log("departure = " + JSON.stringify(departure));
      }

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
                path={
                  [
                    dubai,
                    paris,
                    stockholm
                  ]}
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


export default RouteMap;
