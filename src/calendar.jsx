import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };

  }
  render() {
    return (
      <div className="main">
        Southern Natural Sales
        <div className="sidebar">
          <p><Link to="home">Home</Link></p>
          <p><Link to="calendar">Calendar</Link></p>
        </div>
        <div className="calendar">
           Here is the Calendar page
           
        </div>
      </div>
    );
  }
}

export default Calendar;
