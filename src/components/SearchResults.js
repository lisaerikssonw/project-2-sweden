import React, { Component } from 'react';
import Routes from './Routes'
import RouteMap from './RouteMap'
import '../styles/App.css';



class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortColumn: 'From',
      sortDirectionAsc: false,
      mapValue:0
      
    }

    this.setColumnState = this.setColumnState.bind(this)
    this.setMapValue = this.setMapValue.bind(this)
  }

  

  setMapValue = (value) => {  
    if(!value){
     value=0; 
    }
    console.log(value)
    this.setState({mapValue:value})
  }


  sortPriceAsc = () => (a, b) => b.price-a.price
  sortPriceDes = () => (a, b) => a.price-b.price
  sortNumberOfTransitsAsc = () => (a, b) => b.segments.length-a.segments.length
  sortNumberOfTransitsDes = () => (a, b) => a.segments.length-b.segments.length
  sortDistanceAsc = () => (a, b) => b.distance-a.distance
  sortDistanceDes = () => (a, b) => a.distance-b.distance
  sortTimeAsc = () => (a, b) => b.durationMinutes-a.durationMinutes
  sortTimeDes = () => (a, b) => a.durationMinutes-b.durationMinutes

  setSort() {
    if(this.state.sortDirectionAsc===true) {
      if(this.state.sortColumn==='price') return this.sortPriceAsc()
      if(this.state.sortColumn==='transits') return this.sortNumberOfTransitsAsc()
      if(this.state.sortColumn==='distance') return this.sortDistanceAsc()
      if(this.state.sortColumn==='time') return this.sortTimeAsc()
    } else if (this.state.sortDirectionAsc===false){
      if(this.state.sortColumn==='price') return this.sortPriceDes()
      if(this.state.sortColumn==='transits') return this.sortNumberOfTransitsDes()
      if(this.state.sortColumn==='distance') return this.sortDistanceDes()
      if(this.state.sortColumn==='time') return this.sortTimeDes()
    }
  }

  setColumnState(columnName) {
    this.setState({
      sortColumn: columnName, 
      sortDirectionAsc: !this.state.sortDirectionAsc
    })
  }
  
  render() {

      const sortFunction = this.setSort()
      const routeList = this.props.routes
      .sort(sortFunction)
      .map(route => {return(
        
        <Routes mapValue={this.setMapValue} minutesToHours = {this.props.minutesToHours} {...route} key={route.id}
        routes={this.props.routes}/>
      )})
        return (
        <article>
              <table>
                <caption className="search-caption">Search results</caption>
                <tbody>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Means of Travel</th>
                  <th onClick={() => this.setColumnState('time')} >Time</th>
                  <th onClick={() => this.setColumnState('price')} >Price</th>
                  <th onClick={() => this.setColumnState('distance')} 
                  className="hidden">Distance</th>
                  <th onClick={() => this.setColumnState('transits')} className="hidden">No. Transits</th>
                </tr>
                {routeList}
                </tbody>
              </table>
              <RouteMap mapValue={this.state.mapValue} routes = {this.props.routes} />
          </article>
        )
    }
}

export default SearchResults;
