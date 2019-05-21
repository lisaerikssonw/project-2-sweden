import '../styles/App.css'
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import FalunText from '../data-texts/falun-info-text.json';
import RouteMap from './RouteMap';
//import FalunImage from '../images/falun.png'
import React, { Component } from 'react';

const falunJson = JSON.stringify(FalunText);
const falunInfo = JSON.parse(falunJson);

class MainBody extends Component {
    render() {
        if(this.props.page==="home"){
            return (
            <div>
                <SearchForm submitSearch={this.props.submitSearch}
                handleOrigin={this.props.handleOrigin}
                handleDestination={this.props.handleDestination}
                handleDeparture={this.props.handleDeparture}
                handleReturn={this.props.handleReturn}/>

                {this.props.routes!==false && <div><SearchResults
                routes={this.props.routes}
                minutesToHours = {this.props.minutesToHours}/>
                <RouteMap routes={this.props.routes}
                />
              </div>}

            </div>
            )
        }else if(this.props.page==="falun"){
            return (
                <article>
                <h1 className="Header-text">FALUN</h1>
                <p className="info-text">{falunInfo.text}</p>
                </article>
            )

        }else if(this.props.page==="are"){
            return (
                <article>
                <h1>Åre</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </article>
            )

        }else if(this.props.page==="stockholm"){
            return (
                <article>
                <h1>Stockholm</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </article>
            )

        }
    }

}

export default MainBody;
