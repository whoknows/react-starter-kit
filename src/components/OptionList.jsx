/** @jsx React.DOM */

'use strict';

var React = require('react');
var SelectorOption = require('../components/SelectorOption.jsx')

var OptionList = React.createClass({
    handleSelect: function(newValue){
        if (this.props.multiple) {
            var index = this.props.value.indexOf(newValue);
            if (index === -1) {
                this.props.onSelect(this.props.value.concat(newValue));
            } else {
                this.props.value.splice(index,1);
                this.props.onSelect(this.props.value);
            }
        } else {
            this.props.onSelect([newValue]);
        }
    },
    render: function() {
        var optionNodes = this.props.data.map(function (option) {
            return (
                <SelectorOption value={option.value} selected={this.props.value.indexOf(option.value) !== -1} text={option.text} onSelect={this.handleSelect} />
            );
        }.bind(this));

        var cssclass = 'OptionList';
        if(this.props.display !== undefined){
            cssclass += this.props.display ? '' : ' hidden';
        }
        return (
            <div className={cssclass}>
                {optionNodes}
            </div>
        );
    }
});

module.exports = OptionList;