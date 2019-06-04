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

    cityArticle(city) {
        return(<article className="info-article">
        <figure>
          <img src={city.imgSrc}
              className="city-img"
              alt={city.imgAlt}
              title={city.imgTitle} />
        </figure>
        <div className="info-box">
            <h1 className="header-text">{city.headerContent}</h1>
            {city.pTag}
        </div>
    </article>)

    }

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
                filterBusChecked={this.props.filterBusChecked}
                handleCurrency={this.props.handleCurrency}/>

                {this.props.routes.length ? <SearchResults
                routes={this.props.routes}
                minutesToHours = {this.props.minutesToHours}/> : null }

            </div>
            )
        }else if(this.props.page==="falun"){
            const pFalun = <p className="info-text">{falunInfo.text[0]}<br/><br/>{falunInfo.text[1]}</p>
            return (
                this.cityArticle({imgSrc:'/images/falun.jpg', imgAlt:'Image of Falun', imgTitle:'Falun',
                headerContent:'Falun', pTag: pFalun})
            )

        }else if(this.props.page==="are"){
            const pAre = <p className="info-text">{areInfo.text[0]}<br/><br/>{areInfo.text[1]}</p>
            return (
                this.cityArticle({imgSrc:'/images/aurora.jpg', imgAlt:'Image of Åre', imgTitle:'Åre',
                headerContent:'Åre', pTag: pAre})
            )

        }else if(this.props.page==="stockholm"){
            const pStockholm = <p className="info-text">{stockholmInfo.text[0]}<br/><br/>{stockholmInfo.text[1]}<br/><br/>{stockholmInfo.text[2]}</p>
            return (
                this.cityArticle({imgSrc: '/images/stockholm.png', imgAlt:'Image of Stockholm', imgTitle:'Stockholm',
                headerContent: 'Stockholm', pTag: pStockholm})
            )

        }
    }

}

export default MainBody;
