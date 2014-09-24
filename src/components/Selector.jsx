/** @jsx React.DOM */

'use strict';

var React = require('react');
var OptionList = require('../components/OptionList.jsx');
var TextSearch = require('../components/TextSearch.jsx');

var Selector = React.createClass({
    handleSelect: function(newValue) {
        this.setState({value:newValue});
    },
    handleSearch: function(returnData) {
        this.setState({displayedData:returnData});
    },
    getInitialState: function() {
        return {value:[], multiple:false, data:[], displayedData:[]}
    },
    componentDidMount: function() {
        this.setState({data: this.props.data, displayedData: this.props.data});
    },
    render: function() {
        return (
            <div className="Selector" value={this.state.value} multiple={this.state.multiple}>
                <TextSearch data={this.state.data} onSearch={this.handleSearch} />
                <OptionList data={this.state.displayedData} multiple={this.state.multiple} value={this.state.value} onSelect={this.handleSelect} />
            </div>
        );
    }
});

module.exports = Selector;