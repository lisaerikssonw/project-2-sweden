import React, { Component } from 'react';
import Aside from './components/Aside';
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
                <li>About our Destinations</li>
                <li>View Recommendations</li>
              </ul>
            </nav>

          <hr/>
          <Aside/>
          <hr/>

            <article>
              <h1>Results</h1>

              <table>
                <caption>Search results</caption>
                <tr>
                  <th>Means of Travel</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>
                    <img src="images/icons/train.png"
                      alt="Train"
                      title="Railway" />
                    &nbsp;Railway
                </td>
                  <td>6 h</td>
                  <td>1000-2400 kr</td>
                </tr>
                <tr>
                  <td>
                    <img src="images/icons/aeroplane.png"
                      alt="Aeroplane"
                      title="By air" />
                    &nbsp;Aeroplane
                  </td>
                  <td>1 h</td>
                  <td>2000-5000 kr</td>
                </tr>
                <tr>
                  <td>
                    <img src="images/icons/bus.png"
                      alt="Bus"
                      title="Bus" />
                    &nbsp;Bus
                  </td>
                  <td>10 h</td>
                  <td>700-1000 kr</td>
                </tr>
              </table>
            </article>

            <hr />

            <footer>
              <h3>Ett event, en möjlighet</h3>
              <p>
                <small>

                  Vi leder alla till Sverige. <em>To Sweden</em> i samarbete med Svenska Olympiska
                  kommittén och den internationella olympiska kommittén.
      </small>
              </p>
            </footer>

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
