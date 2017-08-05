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
            content: false
        };
    },

    componentDidMount: function () {
        return request
            .get(this.props.route.config.contentPath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    content: response.body
                });
            }.bind(this));
    },

    onLoad: function () {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.route.config.navigation}/>
                    <Banner about={this.state.content.about}/>

                    <ScrollDown/>
                </Header>
                <Section
                    about={this.state.content.about}
                    projectdescription={this.state.content.projectdescription}
                    countdown={this.state.content.countdown}
                    amountraised={this.state.content.amountraised}
                    contactsupport={this.state.content.contactsupport}
                    team={this.state.content.team}
                    footer={this.state.content.footer}
                    references={this.state.content.references}/>
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
