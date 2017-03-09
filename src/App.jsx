import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="sidebar">
        <p className="App-intro">
           Southern Natural Sales
           <div class="header">
             <span><Link to="/home">Home</Link></span>
             <span><Link to="/calendar">Calendar</Link></span>
            </div>
           {this.props.children}
         </p>
      </div>
    );
  }
}

export default App;
