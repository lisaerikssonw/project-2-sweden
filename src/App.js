import React, { Component } from 'react';
require('dotenv').config();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
      {/* header goes here*/}
    {/*<img src="images/logo.png" alt="Logo" title="To Sweden" />*/} 
    </header>


    <nav>
          {/*menu block goes here*/ }
          <ul>
            <li>Search Trips</li>
            <li>About the Event</li>
            <li>About our Destinations</li>
            <li>View Recommendations</li>
          </ul>
    </nav>
    <hr />

    <aside>
        <form>
          <fieldset>
            <img src="images/icons/search.svg"
            alt="Magnifying glass"
            title="Search" />
            <input list="cities" type="search" name="search" value="From" />
            <datalist id="cities">
              <option value="🇳🇱 Amsterdam" />
              <option value="🇨🇳 Beijing" />
              <option value="🇷🇸 Belgrade" />
              <option value="🇩🇪 Berlin" />
              <option value="🇩🇰 Copenhagen" />
              <option value="🇦🇪 Dubai" />
              <option value="🇩🇪 Hamburg" />
              <option value="🇫🇮 Helsinki" />
              <option value="🇹🇷 Istanbul" />
              <option value="🇬🇧 London" />
              <option value="🇺🇸 Los Angeles"/>
              <option value="🇷🇺 Moscow"/>
              <option value="🇩🇪 Munich (München)"/>
              <option value="🇺🇸 New York"/>
              <option value="🇳🇴 Oslo"/>
              <option value="🇫🇷 Paris"/>
              <option value="🇨🇿 Prague"/>
              <option value="🇮🇸 Reykjavík"/>
              <option value="🇮🇹 Rome"/>
              <option value="🇰🇷 Seoul"/>
              <option value="🇸🇬 Singapore"/>
              <option value="🇷🇺 St. Petersburg"/>
              <option value="🇯🇵 Tokyo"/>
              <option value="🇨🇦 Toronto"/>
              <option value="🇵🇱 Warsaw"/>
              <option value="🇦🇹 Wien"/>
              <option value="🇨🇭 Zürich"/>
            </datalist>

            <select>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Are">Åre</option>
                    <option value="Falun">Falun</option>
            </select>
          </fieldset>
          
          {/*put these into 2 flexboxes*/}
          {/*In order to position them next to each other*/}
          {/*And border = 0 for the fieldset*/}
        
          <fieldset>
            <legend>Departure date</legend>
            <input type="date" />
            <img src="images/icons/calendar.svg"
            alt="Departure date"
            title="Choose date" />
          </fieldset>

          <fieldset>
            <legend>Going home date</legend>
            <input type="date" />
            <img src="images/icons/calendar.svg"
            alt="Going home date"
            title="Choose date" />
            <p>
            // popup window of the schedule?
            //perhaps some javascript?
              <small><a href="#schedule">View the Olympic Schedule</a></small>
            </p>
          </fieldset>
          <button>Search</button>
        </form>
    </aside>

    <hr />

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
                  title="Railway"/>
                  &nbsp;Railway
                </td>
                <td>6 h</td>
                <td>1000-2400 kr</td>
              </tr>
              <tr>
                <td>
                  <img src="images/icons/aeroplane.png"
                  alt="Aeroplane"
                  title="By air"/>
                  &nbsp;Aeroplane
                  </td>
                <td>1 h</td>
                <td>2000-5000 kr</td>
              </tr>
              <tr>
                <td>
                  <img src="images/icons/bus.png"
                  alt="Bus"
                  title="Bus"/>
                  &nbsp;Bus
                  </td>
                <td>10 h</td>
                <td>700-1000 kr</td>
              </tr>
            </table>
    </article>

    <hr/>

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
