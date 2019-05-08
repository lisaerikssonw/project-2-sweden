import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
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


            <header>
              {/*header goes here */}
              {/* <img src="images/logo.png" alt="Logo" title="To Sweden" /> */}
            </header>


            <nav>
              {/* menu block goes here*/}
              <ul>
                <li>Search Trips</li>
                <li>About the Event</li>
                <li><href onClick={()=> this.setState({page:"falun"})}>About Falun</href></li>
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
