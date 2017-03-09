import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
         Here is the Calendar page
         {this.props.children}
      </div>
    );
  }
}

export default Calendar;
