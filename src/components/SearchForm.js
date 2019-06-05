import React from 'react';
import '../styles/App.css';
import '../styles/search-form.css';

const SearchForm = (props) => (

    <aside>
        <form onSubmit={props.submitSearch}>
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
                        onChange={props.handleOrigin} />
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

                    <select className="select-field" onChange={props.handleDestination}>
                        <option value="Stockholm">Stockholm</option>
                        <option value="Aare">Åre</option>
                        <option value="Falun">Falun</option>
                    </select>

                    <select className="select-field" onChange={props.handleCurrency}>
                        <option value="USD">USD</option>
                        <option value="SEK">SEK</option>
                        <option value="EUR">EURO</option>
                    </select>
                </fieldset>
            </div>

            <div className="departure-home-container">
                <fieldset className="departure-home">
                    <legend>Departure date</legend>
                    <input type="date" className="input-style" onChange={props.handleDeparture} />
                    <img src="images/icons/calendar.svg"
                        alt="Departure date"
                        title="Choose date" />
                </fieldset>

                        <fieldset className="departure-home">
                            <legend>Return date</legend>
                            <input type="date" className="input-style" onChange={props.handleReturn} />
                            <img src="images/icons/calendar.svg"
                                alt="Going home date"
                                title="Choose date" />
                        </fieldset>
                    </div>
                    <div className="filter-container">
                        <div className="button-filter" value={props.filterAirChecked} onClick={props.handleFilterAir}>
                            <img src="images/icons/plane-filter.png"
                                alt="Aeroplane"
                                title="Plane"
                                className={props.filterAirChecked ? "filter-img" : "filter-img-toggled"}/>
                        </div>
                        <div className="button-filter" value={props.filterRailChecked} onClick={props.handleFilterRail}>
                            <img src="images/icons/rail-filter.png"
                                alt="Rail"
                                title="Train"
                                className={props.filterRailChecked ? "filter-img" : "filter-img-toggled"}/>
                        </div>
                        <div className="button-filter" value={props.filterCarChecked} onClick={props.handleFilterCar}>
                            <img src="images/icons/car.png"
                                alt="Car"
                                title="Car"
                                className={props.filterCarChecked ? "filter-img" : "filter-img-toggled"}/>
                        </div>
                        <div className="button-filter" value={props.filterFerryChecked} onClick={props.handleFilterFerry}>
                            <img src="images/icons/ferry.png"
                                alt="Ferry"
                                title="Ferry"
                                className={props.filterFerryChecked ? "filter-img" : "filter-img-toggled"}/>
                        </div>
                        <div className="button-filter" value={props.filterBusChecked} onClick={props.handleFilterBus}>
                            <img src="images/icons/bus-filter.png"
                                alt="Bus"
                                title="Bus"
                                className={props.filterBusChecked ? "filter-img" : "filter-img-toggled"}/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <button className="button-style search-button">Search</button>
                    </div>
                </form>
            </aside>
        )

export default SearchForm;
