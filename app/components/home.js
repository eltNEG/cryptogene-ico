'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const request = require('superagent');

const Header = require('./header');
const Navigation = require('./navigation');
const Banner = require('./banner');
const ScrollDown = require('./scrolldown');
const Section = require('./section');
const Loading = require('./loading');

const Home = React.createClass({
    propTypes: {
        route: PropTypes.shape({
            config: PropTypes.shape({
                contentPath: PropTypes.string.isRequired,
                navigation: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    },

    getInitialState: function () {
        return {
            content: true
        };
    },

    componentDidMount: function () {
    /*    return request
            .get(this.props.route.config.contentPath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    content: response.body
                });
            }.bind(this));*/
    },

    onLoad: function () {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.config.navigation}/>
                    <Banner basics={this.state.content.basics}/>
                    <ScrollDown/>
                </Header>

            </div>
        );
    },

    beforeLoad: function () {
        return (
            <Loading/>
        );
    },

    render: function () {
        return this.state.content ? this.onLoad() : this.beforeLoad();
    }
});

module.exports = Home;
