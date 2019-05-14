import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        return (
        <article>
              <h1>Results</h1>

              <table>
                <caption>Search results</caption>
                <tbody>
                <tr>
                  <th>Means of Travel</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
                <tr>
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
                </tr>
                </tbody>
              </table>
            </article>
        )
    }
}

export default SearchResults;