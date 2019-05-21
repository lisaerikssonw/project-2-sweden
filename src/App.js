import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Header from './components/Header';
import './components/App.css';
import './components/mobile.css';
import backgroundImage from "./images/olympic-rings.png";
require('dotenv').config();
const url = "http://free.rome2rio.com/api/1.4/json/Search?"
const apiKey = process.env.REACT_APP_ROME_SECRET_KEY
const filterQueries = { //for future use of query string for filter in URL
  a: "noAir",
  b: "noRail",
  c: "noCar",
  d: "noFerry",
  e: "noBus"
};

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
      filterChecked: props.filterChecked || false, //boolean for filter buttons if checked or not
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
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFilterAir = this.handleFilterAir.bind(this)
    this.handleFilterBus = this.handleFilterBus.bind(this)
    this.handleFilterCar = this.handleFilterCar.bind(this)
    this.handleFilterFerry = this.handleFilterFerry.bind(this)
    this.handleFilterRail = this.handleFilterRail.bind(this)
    this.minutesToHours =this.minutesToHours.bind(this)

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
    //const queryString = Object.keys(filterQueries).map(key => filterQueries[key]).join('&')
    if(this.state.filterAir.valueOf("&noAir")) {
      this.setState({ filterAir: "" })
    } else {
      this.setState({ filterAir: "&noAir" })
    }
  }

  handleFilterRail() {
    //const queryString = Object.keys(filterQueries).map(key => filterQueries[key]).join('&')
    if(this.state.filterRail.valueOf("&noRail")) {
      this.setState({ filterRail: "" })
    } else {
      this.setState({ filterRail: "&noRail" })
    }
  }

  handleFilterCar() {
    if(this.state.filterCar.valueOf("&noCar")) {
      this.setState({ filterCar: "" })
    } else {
      this.setState({ filterCar: "&noCar" })
    }
  }

  handleFilterFerry() {
    if(this.state.filterFerry.valueOf("&noFerry")) {
      this.setState({ filterFerry: "" })
    } else {
      this.setState({ filterFerry: "&noFerry" })
    }
  }

  handleFilterBus() {
    if(this.state.filterBus.valueOf("&noBus")) {
      this.setState({ filterBus: "" })
    } else {
      this.setState({ filterBus: "&noBus" })
    }
  }

  //function for filter buttons - through query string - not in use but will be
  handleFilterChange(id) {
    const queryString = Object.keys(filterQueries).map(key => filterQueries[key]).join('&')
    console.log(id)
    
    console.log(queryString)

    this.setState({ filterChecked: !this.state.filterChecked })
    if (this.state.filterChecked === true) {
      this.setState({ filterURL: "" })
    } else {
      this.setState({ filterURL: "&noRail" })
    }
    console.log("Filter toggled")
    console.log(this.state.filterChecked)
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
            departurePlace: data.places[0].shortName,
            arrivalPlace: data.places[1].shortName,
            distance: route.distance + " Km",
            totalDuration: route.totalDuration,
            price: route.indicativePrices ? route.indicativePrices[0].price : "FREE",
            currency: route.indicativePrices ? route.indicativePrices[0].currency : "-",
            segments: route.segments,
            vehicles: data.vehicles,
            places: data.places,
            durationHours: this.minutesToHours(route.totalDuration)
          })
        })
      })
      .catch(error => console.log(error))
  }

  render() {

    return (
      <div id="root">
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <main>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <Header />
            <nav>
              {/* menu block goes here*/}

              <div className="nav-container">
              <img className="icon"
                    src={process.env.PUBLIC_URL + "/images/icons/rings.png"}
                    alt="Olympic rings"
                    title="Winter Olympics 2024" />
                <button className="button"
                    onClick={()=> this.setState({page:"home"})}>Search Trips
                </button>
                <button className="button">About the Event</button>
                <button className="dropdown">About our<br />Destinations
                  <div className="dropdown-content">
                    <div onClick={() => this.setState({ page: "falun" })}>Falun</div>
                    <div onClick={() => this.setState({ page: "stockholm" })}>Stockholm</div>
                    <div onClick={() => this.setState({ page: "are" })}>Åre</div>
                  </div>
                </button>

                <button className="button hidden">View Recommended</button>
              </div>
            </nav>

            <hr />

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
              minutesToHours = {this.minutesToHours} />

            <hr />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}
// debug environment variables
const romeKey = process.env.REACT_APP_ROME_SECRET_KEY;
const googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;
console.log("rome 2 rio key = " + romeKey);
console.log("google key = " + googleKey);

export default App;
