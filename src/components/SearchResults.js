import React, { Component } from 'react';
import Route from './Route'
import RouteMap from './RouteMap'
import '../styles/App.css';
import '../styles/search-results.css';



class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortColumn: 'From',
      sortDirectionAscending: false,
      mapValue: 0

    }

    this.setColumnState = this.setColumnState.bind(this)
    this.setMapValue = this.setMapValue.bind(this)

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
      return this.state.sortDirectionAscending ? this.sortPriceAscending() : this.sortPriceDescending();

    } else if (this.state.sortColumn === 'transits') {
      return this.state.sortDirectionAscending ? this.sortNumberOfTransitsAscending() : this.sortNumberOfTransitsDescending();

    } else if (this.state.sortColumn === 'distance') {
      return this.state.sortDirectionAscending ? this.sortDistanceAscending() : this.sortDistanceDescending();

    } else if (this.state.sortColumn === 'time') {
      return this.state.sortDirectionAscending ? this.sortTimeAscending() : this.sortTimeDescending();
    }
  }

  setColumnState(columnName) {
    this.setState({
      sortColumn: columnName,
      sortDirectionAscending: !this.state.sortDirectionAscending
    })
  }


  setMapValue(id) {
    this.setState({ mapValue: id })
  }

  render() {

    const sortIcon = <span className="exterior-sort-box">
      <span className="sort-arrow">
        <img src={process.env.PUBLIC_URL + "/images/icons/sort-up-1.png"}
          className="arrow-up"
          alt="sort-arrow-up"
          title="Sort-up" />

        <img src={process.env.PUBLIC_URL + "/images/icons/sort-down-1.png"}
          className="arrow-down"
          alt="sort-arrow-down"
          title="Sort-down" />
      </span>
    </span>

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
          <tbody className="search-results">
            <tr>
              <th className="search-result-header">From</th>
              <th className="search-result-header">To</th>
              <th className="search-result-header">Means of Travel</th>
              <th
                className="search-result-header"
                onClick={() => this.setColumnState('time')} >Time {sortIcon}
              </th>
              <th
                className="search-result-header"
                onClick={() => this.setColumnState('price')} >Price {sortIcon}
              </th>
              <th
                onClick={() => this.setColumnState('distance')}
                className="search-result-header hidden">Distance {sortIcon}
              </th>
              <th
                onClick={() => this.setColumnState('transits')}
                className="search-result-header hidden">Transits {sortIcon}
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
