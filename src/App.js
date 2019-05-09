import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Header from './components/Header';
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
            <ul>
              <li><a href onClick={()=> this.setState({page:"home"})}>Home</a></li>
              <li>Search Trips</li>
              <li>About the Event</li>
              <li><a href onClick={()=> this.setState({page:"falun"})}>About Falun</a></li>
              <li>View Recommendations</li>
            </ul>
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
