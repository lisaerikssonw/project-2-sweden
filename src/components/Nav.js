import React, { Component } from 'react';

class Nav extends Component {

    render(){
        return (
            <nav>
            {/* menu block goes here*/}
            <ul>
              <li>Search Trips</li>
              <li>About the Event</li>
              <li><a href onClick={()=> this.setState({page:"falun"})}>About Falun</a></li>
              <li>View Recommendations</li>
            </ul>
          </nav>
        )
    }
}

export default Nav;