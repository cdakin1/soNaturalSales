import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="Home">
         Here is the Home page
         {this.props.children}
      </div>
    );
  }
}

export default Home;
