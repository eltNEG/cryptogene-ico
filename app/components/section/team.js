'use strict';

const React = require('react');

const Team = React.createClass({

    render: function () {
        return (
            <section id='team'>
            <div className='row'>
            <h1>{this.props.content}</h1>
            </div>
            </section>
        );
    }
});

module.exports = Team;
