/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Selector = require('../components/Selector.jsx');

var selectorData = [
  {'value':1, 'text': 'La premiere valeur'},
  {'value':2, 'text': 'Valeur 2'},
  {'value':3, 'text': 'Troisieme valeur'}
];

var HomePage = React.createClass({
  render: () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Selector data={selectorData} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
