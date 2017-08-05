'use strict';

const React = require('react');

const Link = require('./link');
const ICOPropTypes = require('../../prop_types/ico');

const Navigation = React.createClass({
    propTypes: {
        navigation: ICOPropTypes.navigation
    },

    render: function () {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {Object.keys(this.props.navigation).map(function (navigationLink, index) {
                        const navigationName = this.props.navigation[navigationLink];
                        return (
                            <Link key={index} link={navigationLink} name={navigationName}/>
                        );
                    }.bind(this))}
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;
