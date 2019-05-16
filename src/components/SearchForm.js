import React, { Component } from 'react';
import './App.css';
class SearchForm extends Component {

    render() {
        return (
        <aside>
            <form onSubmit={this.props.submitSearch}>
            <div>
                <fieldset className="from-to">
                    <img src="images/icons/search.svg"
                        alt="Magnifying glass"
                        title="Search" />
                    <input list="cities" type="search" name="search" placeholder="From" onChange={this.props.handleOrigin}/>
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
                        <option value="🇺🇸 Los Angeles" />
                        <option value="🇷🇺 Moscow" />
                        <option value="🇩🇪 Munich (München)" />
                        <option value="🇺🇸 New York" />
                        <option value="🇳🇴 Oslo" />
                        <option value="🇫🇷 Paris" />
                        <option value="🇨🇿 Prague" />
                        <option value="🇮🇸 Reykjavík" />
                        <option value="🇮🇹 Rome" />
                        <option value="🇰🇷 Seoul" />
                        <option value="🇸🇬 Singapore" />
                        <option value="🇷🇺 St. Petersburg" />
                        <option value="🇯🇵 Tokyo" />
                        <option value="🇨🇦 Toronto" />
                        <option value="🇵🇱 Warsaw" />
                        <option value="🇦🇹 Wien" />
                        <option value="🇨🇭 Zürich" />
                    </datalist>

                    <select onChange={this.props.handleDestination}>
                        <option value="Stockholm">Stockholm</option>
                        <option value="Aare">Åre</option>
                        <option value="Falun">Falun</option>
                    </select>
                </fieldset>
                </div>
                
                {/*put these into 2 flexboxes ?
           In order to pgosition them next to each other
           And border = 0 for the fieldset ?*/}
           <div className="departure-home-container">
                <fieldset className="departure-home">
                    <legend>Departure date</legend>
                    <input type="date" onChange={this.props.handleDeparture}/>
                    <img src="images/icons/calendar.svg"
                        alt="Departure date"
                        title="Choose date" />
                </fieldset>

                <fieldset className="departure-home">
                    <legend>Return date</legend>
                    <input type="date" onChange={this.props.handleReturn}/>
                    <img src="images/icons/calendar.svg"
                        alt="Going home date"
                        title="Choose date" />
                    <p>
                        {/* popup window of the schedule?
            //perhaps some javascript?*/}
                        <small><a href="#schedule">View the Olympic Schedule</a></small>
                    </p>
                </fieldset>
                </div>
                <div>
                <button className="search-button">Search</button>
                </div>
            </form>
            </aside>
        )
    }
}
//<button onClick={this.props.toggleFilter} className={this.props.buttonClass}>No bike</button>
export default SearchForm;