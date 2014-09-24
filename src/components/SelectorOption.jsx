/** @jsx React.DOM */

'use strict';

var React = require('react');

var SelectorOption = React.createClass({
    handleClick: function() {
        this.props.onSelect && this.props.onSelect(this.props.value);
    },
    render: function() {
        var cssclass = 'selectorOption' + (this.props.selected ? ' selectedOption' : '');
        return (
            <div onClick={this.handleClick} data-value={this.props.value} className={cssclass} data-selected={this.props.selected}>{this.props.text}</div>
        );
    }
});

module.exports = SelectorOption;