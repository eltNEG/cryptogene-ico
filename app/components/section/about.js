'use strict';

const React = require('react');

const ICOPropTypes = require('../../prop_types/ico');

const About = React.createClass({
    propTypes: {
        content: ICOPropTypes.basics
    },

    render: function () {
        return (
            <section id='about'>
                <div className='row'>
                    <h1>{this.props.content}</h1>
                </div>
            </section>
        );
    }
});

module.exports = About;
