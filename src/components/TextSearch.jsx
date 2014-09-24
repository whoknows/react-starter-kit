/** @jsx React.DOM */

'use strict';

var React = require('react');

var TextSearch = React.createClass({
    handleChange: function(e) {
        if(e.target.value.length >= this.props.minLength) {
            var search = new RegExp(e.target.value, "gi");
            var result = [];
            this.props.data.map(function (value) {
                if (value.text.match(search)) {
                    result.push(value);
                }
            });

            this.props.onSearch(result);
        } else if(e.target.value.length === 0) {
            this.props.onSearch(this.props.data);
        }
    },
    componentDidMount: function() {
        this.setState({data: this.props.data});
    },
    render: function() {
        var cssclass = 'TextSearch';
        if(this.props.display !== undefined){
            cssclass += this.props.display ? '' : ' hidden';
        }
        return (
            <div className={cssclass}>
                <input type="text" className="form-control" placeholder="Rechercher une valeur" onChange={this.handleChange} />
            </div>
        );
    }
});

module.exports = TextSearch;