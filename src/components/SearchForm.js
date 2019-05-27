import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/search-form.css';
class SearchForm extends Component {

    render() {
        return (
        <aside>
            <form onSubmit={this.props.submitSearch}>
            <div>
                <fieldset>
                    <img src="images/icons/search.svg"
                        alt="Magnifying glass"
                        title="Search" />
                    <input className="cities input-style"
                        list="cities"
                        type="search"
                        name="search"
                        placeholder="From"
                        onChange={this.props.handleOrigin}/>
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

                    <select className="select-destination" onChange={this.props.handleDestination}>
                        <option value="Stockholm">Stockholm</option>
                        <option value="Aare">Åre</option>
                        <option value="Falun">Falun</option>
                    </select>
                </fieldset>
                </div>

           <div className="departure-home-container">
                <fieldset className="departure-home">
                    <legend>Departure date</legend>
                    <input type="date" className="input-style" onChange={this.props.handleDeparture}/>
                    <img src="images/icons/calendar.svg"
                        alt="Departure date"
                        title="Choose date" />
                </fieldset>

                        <fieldset className="departure-home">
                            <legend>Return date</legend>
                            <input type="date" className="input-style" onChange={this.props.handleReturn} />
                            <img src="images/icons/calendar.svg"
                                alt="Going home date"
                                title="Choose date" />
                        </fieldset>
                    </div>
                    <div className="filter-container">

                        <div>
                        <img src="images/icons/plane-filter.png"
                            alt="aeroplane"
                            title="Plane"
                            className={this.props.filterAirChecked ? "filter-img" : "filter-img-toggled"}/>
                        <label className="switch">
                            <input  type="checkbox" className="input-style" value={this.props.filterAirChecked} onChange={this.props.handleFilterAir} />
                            <div className="slider"></div>
                        </label>
                        </div>
                        <div>
                        <img src="images/icons/rail-filter.png"
                            alt="rail"
                            title="Rail"
                            className={this.props.filterRailChecked ? "filter-img" : "filter-img-toggled"}/>
                        <label className="switch">
                            <input type="checkbox" className="input-style" value={this.props.filterRailChecked} onChange={this.props.handleFilterRail} />
                            <div className="slider"></div>
                        </label>
                        </div>
                        <div>
                        <img src="images/icons/car.png"
                            alt="car"
                            title="Car"
                            className={this.props.filterCarChecked ? "filter-img" : "filter-img-toggled"}/>
                        <label className="switch">
                            <input type="checkbox" className="input-style" value={this.props.filterCarChecked} onChange={this.props.handleFilterCar} />
                            <div className="slider"></div>
                        </label>
                        </div>
                        <div>
                        <img src="images/icons/ferry.png"
                            alt="ferry"
                            title="Ferry"
                            className={this.props.filterFerryChecked ? "filter-img" : "filter-img-toggled"}/>
                        <label className="switch">
                            <input type="checkbox" className="input-style" value={this.props.filterFerryChecked} onChange={this.props.handleFilterFerry} />
                            <div className="slider"></div>
                        </label>
                        </div>
                        <div>
                        <img src="images/icons/bus-filter.png"
                            alt="bus"
                            title="Bus"
                            className={this.props.filterBusChecked ? "filter-img" : "filter-img-toggled"}/>
                        <label className="switch">
                            <input type="checkbox" className="input-style" value={this.props.filterBusChecked} onChange={this.props.handleFilterBus} />
                            <div className="slider"></div>
                        </label>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <button className="button-style search-button">Search</button>
                    </div>
                </form>
            </aside>
        )
    }
}

export default SearchForm;
