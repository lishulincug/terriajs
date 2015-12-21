'use strict';
var React = require('react');
var DataCatalogGroup = require('./DataCatalogGroup.jsx');
var DataPreview = require('./DataPreview.jsx');
var AddData = require('./AddData.jsx');

var MyDataTab = React.createClass({
    propTypes: {
      terria: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            previewed: undefined,
            dataCatalog: undefined
        };
    },

    updateCatalog: function(dataCatalog){
        this.setState({
            dataCatalog: dataCatalog
        });
        window.nowViewingUpdate.raiseEvent();
    },

    render: function() {
        var content = null;
        if (this.state.dataCatalog) {
            content = <DataCatalogGroup group={this.state.dataCatalog}/>;
        }
        return (<div className="panel-content row">
                <div className='col col-6'>
                <div className="added-data">
                <h3> Previously added data </h3>
                <ul className = 'list-reset data-catalog'>
                {content}
                </ul>
                </div>
                <AddData updateCatalog={this.updateCatalog} terria={this.props.terria} />
                </div>
                <div className="data-preview preview col col-6 block">
                <DataPreview terria = {this.props.terria} previewed={this.state.previewed} />
                </div>
                </div>);
    }
});
module.exports = MyDataTab;
