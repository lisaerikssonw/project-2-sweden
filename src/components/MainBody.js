import '../styles/App.css'
import '../styles/mainbody.css'
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import FalunText from '../data-texts/falun-info-text.json';
import StockholmText from '../data-texts/stockholm-info-text.json'
import AreText from '../data-texts/are-info-text.json'
import React, { Component } from 'react';


const falunJson = JSON.stringify(FalunText);
const falunInfo = JSON.parse(falunJson);

const stockholmJson = JSON.stringify(StockholmText);
const stockholmInfo = JSON.parse(stockholmJson);

const areJson = JSON.stringify(AreText);
const areInfo = JSON.parse(areJson);

class MainBody extends Component {
    render() {
        if(this.props.page==="home"){

            return (
            <div>
                <SearchForm submitSearch={this.props.submitSearch}
                handleOrigin={this.props.handleOrigin}
                handleDestination={this.props.handleDestination}
                handleDeparture={this.props.handleDeparture}
                handleReturn={this.props.handleReturn}
                handleFilterAir={this.props.handleFilterAir}
                handleFilterRail={this.props.handleFilterRail}
                handleFilterCar={this.props.handleFilterCar}
                handleFilterFerry={this.props.handleFilterFerry}
                handleFilterBus={this.props.handleFilterBus}
                filterAirChecked={this.props.filterAirChecked}
                filterRailChecked={this.props.filterRailChecked}
                filterCarChecked={this.props.filterCarChecked}
                filterFerryChecked={this.props.filterFerryChecked}
                filterBusChecked={this.props.filterBusChecked}/>

                {this.props.routes.length ? <SearchResults
                routes={this.props.routes}
                minutesToHours = {this.props.minutesToHours}/> : null }

            </div>
            )
        }else if(this.props.page==="falun"){
            return (
                <article className="info-article">
                    <img src={process.env.PUBLIC_URL + "/images/falun.png"}
                        className="city-img"
                        alt="Image of Falun"
                        title="falun" />
                    <div className="info-box">
                        <h1 className="header-text">FALUN</h1>
                        <p className="info-text">{falunInfo.text[0]}<br/><br/>{falunInfo.text[1]}</p>
                    </div>
                </article>
            )

        }else if(this.props.page==="are"){
            return (
                <article className="info-article">
                    <img src={process.env.PUBLIC_URL + "/images/aurora.jpg"}
                        className="city-img"
                        alt="Image of Åre"
                        title="are" />
                    <div className="info-box">
                        <h1 className="header-text">Åre</h1>
                        <p className="info-text">{areInfo.text[0]}<br/><br/>{areInfo.text[1]}
                        </p>
                    </div>
                </article>
            )

        }else if(this.props.page==="stockholm"){
            return (
                <article className="info-article">
                    <img src={process.env.PUBLIC_URL + "/images/stockholm.png"}
                        className="city-img"
                        alt="Image of Stockholm"
                        title="stockholm" />
                    <div className="info-box">
                        <h1 className="header-text">Stockholm</h1>
                        <p className="info-text">{stockholmInfo.text[0]}<br/><br/>{stockholmInfo.text[1]}<br/><br/>{stockholmInfo.text[2]}
                        </p>
                  </div>
                </article>
            )

        }
    }

}

export default MainBody;
