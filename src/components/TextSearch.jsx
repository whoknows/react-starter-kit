/** @jsx React.DOM */

'use strict';

var React = require('react');

var TextSearch = React.createClass({
    handleChange: function(e) {
        var search = new RegExp(e.target.value, "gi");
        var result = [];
        this.props.data.map(function (value) {
            if (value.text.match(search)) {
                result.push(value);
            }
        });

        this.props.onSearch(result);
    },
    componentDidMount: function() {
        this.setState({data: this.props.data});
    },
    render: function() {
        return (
            <div className="TextSearch">
                <input type="text" placeholder="Rechercher une valeur" onChange={this.handleChange} />
            </div>
        );
    }
});

module.exports = TextSearch;