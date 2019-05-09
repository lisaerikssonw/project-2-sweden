import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Header from './components/Header';
import './components/App.css';

require('dotenv').config();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "home",
      places: []
    }
  }

  render() {
    return (
      <div id="root">
        <div className="App">
          <main>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <Header/>
            <nav>
            {/* menu block goes here*/}
            <hr/>
              <div className="nav-container">
                <button onClick={()=> this.setState({page:"home"})}>Home</button>
                <button>Search Trips</button>
                <button>About the Event</button>
                <button className="dropdown">About our Destinations
                  <div className="dropdown-content">
                    <a href="#" onClick={()=> this.setState({page:"falun"})}>Falun</a>
                    <a href="#" onClick={()=> this.setState({page:"stockholm"})}>Stockholm</a>
                    <a href="#"onClick={()=> this.setState({page:"are"})}>Åre</a>
                  </div>
                </button>
                  
                  <button className="button">View Recommendations</button>
              </div>
            
          </nav>

            <hr/>
            <MainBody page={this.state.page}/>
            <hr />
            <Footer/>
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
