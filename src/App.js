import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/App.css';
import './styles/footer.css';
import './styles/mobile.css';

import backgroundImage from "./images/olympic-rings.png";
require('dotenv').config();
const url = "http://free.rome2rio.com/api/1.4/json/Search?"
const apiKey = process.env.REACT_APP_ROME_SECRET_KEY

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "home",
      origin: '',
      destination: 'Stockholm',
      departureDate: '',
      returnDate: '',
      routes: [],
      places: [],
      filterAirChecked: props.filterAirChecked || true, //boolean for filter buttons if checked or not
      filterRailChecked: props.filterRailChecked || true,
      filterCarChecked: props.filterCarChecked || true,
      filterFerryChecked: props.filterFerryChecked || true,
      filterBusChecked: props.filterBusChecked || true,
      filterURL: "",
      filterAir: "",
      filterRail: "",
      filterCar: "",
      filterFerry: "",
      filterBus: ""
    }

    this.handleDestination = this.handleDestination.bind(this)
    this.handleOrigin = this.handleOrigin.bind(this)
    this.handleDeparture = this.handleDeparture.bind(this)
    this.handleReturn = this.handleReturn.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
    this.handleFilterAir = this.handleFilterAir.bind(this)
    this.handleFilterBus = this.handleFilterBus.bind(this)
    this.handleFilterCar = this.handleFilterCar.bind(this)
    this.handleFilterFerry = this.handleFilterFerry.bind(this)
    this.handleFilterRail = this.handleFilterRail.bind(this)

    this.minutesToHours = this.minutesToHours.bind(this)
    this.handlePageState = this.handlePageState.bind(this)

  }

  handleDestination(event) {
    this.setState({
      destination: event.target.value
    })
  }

  handleOrigin(event) {
    this.setState({
      origin: event.target.value
    })
  }

  handleDeparture(event) {
    this.setState({
      departureDate: event.target.value
    })
  }

  handleReturn(event) {
    this.setState({
      returnDate: event.target.value
    })
  }

  submitSearch(event) {
    event.preventDefault()

    this.sendRequest()

  }

  handleFilterAir() {
    if(this.state.filterAir.valueOf("&noAir")) {
      this.setState({ filterAir: "" })
      this.setState({filterAirChecked: true})
    } else {
      this.setState({ filterAir: "&noAir" })
      this.setState({filterAirChecked: false})
    }
  }

  handleFilterRail() {
    if(this.state.filterRail.valueOf("&noRail")) {
      this.setState({ filterRail: "" })
      this.setState({filterRailChecked: true})
    } else {
      this.setState({ filterRail: "&noRail" })
      this.setState({filterRailChecked: false})
    }
  }

  handleFilterCar() {
    if(this.state.filterCar.valueOf("&noCar")) {
      this.setState({ filterCar: "" })
      this.setState({filterCarChecked: true})
    } else {
      this.setState({ filterCar: "&noCar" })
      this.setState({filterCarChecked: false})
    }
  }

  handleFilterFerry() {
    if(this.state.filterFerry.valueOf("&noFerry")) {
      this.setState({ filterFerry: "" })
      this.setState({filterFerryChecked: true})
    } else {
      this.setState({ filterFerry: "&noFerry" })
      this.setState({filterFerryChecked: false})
    }
  }

  handleFilterBus() {
    if(this.state.filterBus.valueOf("&noBus")) {
      this.setState({ filterBus: "" })
      this.setState({filterBusChecked: true})
    } else {
      this.setState({ filterBus: "&noBus" })
      this.setState({filterBusChecked: false})
    }
  }

  minutesToHours(timeInMinutes){

    if(timeInMinutes<60){

      return timeInMinutes + " Min";
    }else {
      let sum = timeInMinutes/60;
      return sum.toFixed(1) + "h";

    }
  }

  sendRequest() {
    fetch(`${url}key=${apiKey}&oName=${this.state.origin}&dName=${this.state.destination}
    &noRideshare&noMinorStart&noMinorEnd&noSpecial&noBikeshare&noTowncar${this.state.filterAir}${this.state.filterRail}${this.state.filterBus}${this.state.filterFerry}${this.state.filterCar}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          routes: data.routes.map((route, index) =>

          route = {
            id: index,
            name: route.name,
            departurePlace: data.places[0],
            arrivalPlace: data.places[1],
            distance: route.distance,
            totalDuration: route.totalDuration,
            price: route.indicativePrices ? route.indicativePrices[0].price : " ",
            currency: route.indicativePrices ? route.indicativePrices[0].currency : "-",
            segments: route.segments,
            vehicles: data.vehicles,
            places: data.places,
            currencyCode: data.currencyCode,
            durationMinutes: route.totalDuration,
            durationHours: this.minutesToHours(route.totalDuration)
          })
        })
      })
      .catch(error => console.log(error))
  }

  handlePageState(editPage) {
    this.setState({page: editPage})
  }

  render() {

    return (
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <Header />
            <Nav page={this.state.page} handlePageState={this.handlePageState}/>
            
            <hr />
            <main>
            <MainBody
              page={this.state.page}
              submitSearch={this.submitSearch}
              handleFilterAir={this.handleFilterAir}
              handleFilterRail={this.handleFilterRail}
              handleFilterCar={this.handleFilterCar}
              handleFilterFerry={this.handleFilterFerry}
              handleFilterBus={this.handleFilterBus}
              handleOrigin={this.handleOrigin}
              handleDestination={this.handleDestination}
              handleDeparture={this.handleDeparture}
              handleReturn={this.handleReturn}
              routes={this.state.routes}
              minutesToHours = {this.minutesToHours}
              filterAirChecked = {this.state.filterAirChecked}
              filterRailChecked = {this.state.filterRailChecked}
              filterCarChecked = {this.state.filterCarChecked}
              filterFerryChecked = {this.state.filterFerryChecked}
              filterBusChecked = {this.state.filterBusChecked}/>
              </main>
            <hr />
            <Footer />
          
        </div>
    );
  }
}
// debug environment variables
/* const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;
console.log("google key = " + googleKey); */

export default App;
