import React, { Component } from 'react';
import Routes from './Routes'
import './App.css';

class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortColumn: 'From',
      sortDirectionAsc: false
    }
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
  
  render() {

      const sortFunction = this.setSort()
      const routeList = this.props.routes
      .sort(sortFunction)
      .map(route => {return(
        
        <Routes minutesToHours = {this.props.minutesToHours} {...route} key={route.id}
        routes={this.props.routes}/>
      )})
        return (
        <article>
              <h1>Results</h1>

              <table>
                <caption>Search results</caption>
                <tbody>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Means of Travel</th>
                  <th onClick={() => this.setState({
                    sortColumn: "time", 
                    sortDirectionAsc: !this.state.sortDirectionAsc
                  })} >Time</th>
                  <th onClick={() => this.setState({
                    sortColumn: "price", 
                    sortDirectionAsc: !this.state.sortDirectionAsc
                  })} >Price</th>
                  <th onClick={() => this.setState({
                    sortColumn: "distance", 
                    sortDirectionAsc: !this.state.sortDirectionAsc
                  })} >Distance</th>
                  <th onClick={() => this.setState({
                    sortColumn: "transits", 
                    sortDirectionAsc: !this.state.sortDirectionAsc
                  })}>Number of Transitions</th>
                </tr>
                {routeList}
                {/*<tr>
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
                </tr>*/}
                </tbody>
              </table>
            </article>
        )
    }
}

export default SearchResults;