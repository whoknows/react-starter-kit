/** @jsx React.DOM */

'use strict';

var React = require('react');
var OptionList = require('../components/OptionList.jsx');
var TextSearch = require('../components/TextSearch.jsx');
var SelectorOption = require('../components/SelectorOption.jsx')

var Selector = React.createClass({
    handleSelect: function(newValue) {
        this.setState({value:newValue});
    },
    handleSearch: function(returnData) {
        this.setState({displayedData:returnData});
    },
    handleClick: function() {
        this.setState({stateOpen:!this.state.stateOpen});
    },
    getInitialState: function() {
        return {
            value:[],
            multiple:true,
            data:[],
            displayedData:[],
            stateOpen: false
        }
    },
    componentDidMount: function() {
        this.setState({
            data: this.props.data,
            displayedData: this.props.data
        });
    },
    render: function() {
        var currentValue = this.state.value;

        if(currentValue.length > 0) {
            currentValue = currentValue.length+ ' selected values';
        //} else if(currentValue.length == 1) {
         //   currentValue = currentValue[0].text;
        } else {
            currentValue = 'Nothing selected';
        }

        return (
            <div className="Selector" value={this.state.value} multiple={this.state.multiple}>
                <SelectorOption value={null} selected={false} text={currentValue} onSelect={this.handleClick} />
                <TextSearch display={this.state.stateOpen} data={this.state.data} minLength={1} onSearch={this.handleSearch} />
                <OptionList display={this.state.stateOpen} data={this.state.displayedData} multiple={this.state.multiple} value={this.state.value} onSelect={this.handleSelect} />
            </div>
        );
    }
});

module.exports = Selector;