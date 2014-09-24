/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Selector = require('../components/Selector.jsx');

var selectorData = [
  {'key':1, 'value':1, 'text': 'La premiere valeur'},
  {'key':2, 'value':2, 'text': 'Valeur 2'},
  {'key':3, 'value':3, 'text': 'Troisieme valeur'},
  {'key':4, 'value':4, 'text': 'Valeur n°4'}
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
