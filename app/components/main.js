'use strict';

const React = require('react');
const PropTypes = React.PropTypes;
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const Header = require('./header');
const Home = require('./home');

const Main = React.createClass({

    render: function () {
        return (
            <div className='main-container'>
                <Home config={this.props.config}></Home>
            </div>
        );
    }
});

module.exports = Main;
