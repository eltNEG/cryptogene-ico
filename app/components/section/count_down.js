'use strict';

const React = require('react');

const CountClock = React.createClass({

    render: function () {
        return (
            <section id='count-clock'>
                <div className='row'>
                    <h1>{this.props.content}</h1>
                </div>
            </section>
        );
    }
});

module.exports = CountClock;
