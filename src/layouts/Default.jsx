/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  render: () => {
    return (
      <div>
        <Navbar />
        <div className="jumbotron">
          <div className="container text-center">
            <h1>React</h1>
            <p>No reason.</p>
          </div>
        </div>
        <this.props.activeRouteHandler />
        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              &copy; KriaSoft • <Link to="home">Home</Link> • <Link to="privacy">Privacy</Link></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DefaultLayout;
