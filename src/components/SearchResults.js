import React, { Component } from 'react';
import Route from './Route'
import RouteMap from './RouteMap'
import '../styles/App.css';
import '../styles/search-results.css';
import SortArrow from './SortArrow';


class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortColumn: 'From',
      sortAscending: false,
      mapValue: 0

    }

    this.setColumnState = this.setColumnState.bind(this)
    this.setMapValue = this.setMapValue.bind(this)
    this.setSortArrow = this.setSortArrow.bind(this)

  }

  sortPriceAscending = () => (a, b) => b.price - a.price
  sortPriceDescending = () => (a, b) => a.price - b.price
  sortNumberOfTransitsAscending = () => (a, b) => b.segments.length - a.segments.length
  sortNumberOfTransitsDescending = () => (a, b) => a.segments.length - b.segments.length
  sortDistanceAscending = () => (a, b) => b.distance - a.distance
  sortDistanceDescending = () => (a, b) => a.distance - b.distance
  sortTimeAscending = () => (a, b) => b.durationMinutes - a.durationMinutes
  sortTimeDescending = () => (a, b) => a.durationMinutes - b.durationMinutes

  setSort() {

    if (this.state.sortColumn === 'price') {
      return this.state.sortAscending ? this.sortPriceAscending() : this.sortPriceDescending();

    } else if (this.state.sortColumn === 'transits') {
      return this.state.sortAscending ? this.sortNumberOfTransitsAscending() : this.sortNumberOfTransitsDescending();

    } else if (this.state.sortColumn === 'distance') {
      return this.state.sortAscending ? this.sortDistanceAscending() : this.sortDistanceDescending();

    } else if (this.state.sortColumn === 'time') {
      return this.state.sortAscending ? this.sortTimeAscending() : this.sortTimeDescending();
    }
  }

  setColumnState(columnName) {
    this.setState({
      sortColumn: columnName,
      sortAscending: !this.state.sortAscending
    })
  }


  setMapValue(id) {
    this.setState({ mapValue: id })
  }

  setSortArrow(isAscending, columnName) {
    this.setState({
      sortAscending: isAscending ? true : false,
      sortColumn: columnName
    })
  }

  setSortArrows(columnName) {
    return(
      <span className="exterior-sort-box">
      <span className="sort-arrow">
        {this.setSortArrow(true)}
        {this.setSortArrow(false)}
      </span>
    </span>
    )
  }

  setSortArrowUp(columnName) {
    return(
    <SortArrow sortColumn={this.state.sortColumn} sortAscending={this.state.sortAscending}
    sortImg={process.env.PUBLIC_URL + "/images/icons/sort-up-1.png"} onClick={()=>this.setSortArrow(columnName)}/>)
  }

  setSortArrowDown(columnName) { 
    return(
    <SortArrow sortColumn={this.state.sortColumn} sortAscending={this.state.sortAscending}
      sortImg={process.env.PUBLIC_URL + "/images/icons/sort-down-1.png"} onClick={()=>this.setSortArrow(columnName)} />)
  }
  
  render() {
    const sortFunction = this.setSort()
    const routeList = this.props.routes
      .sort(sortFunction)
      .map(route => {
        return (

          <Route setMapValue={this.setMapValue} minutesToHours={this.props.minutesToHours} {...route} key={route.id}
            routes={this.props.routes} mapValue={this.state.mapValue} />
        )
      })
    return (
      <article className="center-results">
        <table>
          <caption className="search-caption">Search results</caption>
          <tbody className="searchResults">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Means of Travel</th>
              <th
                onClick={() => this.setColumnState('time')} >Time {this.setSortArrows('time')}
              </th>
              <th
                onClick={() => this.setColumnState('price')} >Price {this.setSortArrows('price')}}
              </th>
              <th
                onClick={() => this.setColumnState('distance')}
                className="hidden">Distance {this.setSortArrows('distance')}
              </th>
              <th
                onClick={() => this.setColumnState('transits')}
                className="hidden">Transits {this.setSortArrows('transits')}
              </th>
            </tr>
            {routeList}
          </tbody>
        </table>
        <RouteMap mapValue={this.state.mapValue} routes={this.props.routes} />
      </article>

    )
  }
}

export default SearchResults;
