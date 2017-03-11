import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
      line: null,
      date: null,
      comments: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputStore = this.inputStore.bind(this);
    this.inputLine = this.inputLine.bind(this);
    this.inputdate = this.inputdate.bind(this);
    this.inputComments = this.inputComments.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newDemo = {
      store: this.state.store,
      line: this.state.line,
      date: this.state.date,
      comments: this.state.comments
    };
    console.log(newDemo);
  }

  inputStore(event) {
  this.setState({ store: event.target.value });
  }
  inputLine(event) {
    this.setState({ line: event.target.value });
  }
  inputdate(event) {
    this.setState({ date: event.target.value });
  }
  inputComments(event) {
    this.setState({ comments: event.target.value });
  }

  render() {
    return (
      <div className="main">
        Southern Natural Sales
        <div className="sidebar">
          <p><Link to="home">Home</Link></p>
          <p><Link to="calendar">Calendar</Link></p>
        </div>
        <div className="home">
           Here is the Home page

          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.inputStore} placeholder="Store"></input><br />
            <input type="text" onChange={this.inputLine} placeholder="Line Being Demoed"></input><br />
            <input type="date" onChange={this.inputdate}></input><br />
            <br />
            <textarea type="text" onChange={this.inputComments} placeholder="Comments"></textarea><br />
            <button type="submit">Create Demo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
