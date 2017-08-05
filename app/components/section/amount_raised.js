'use strict';

const React = require('react');

const AmountRaised = React.createClass({

    render: function () {
        return (
            <section id='amount-raised'>
                <div className='row'>
                    <h1>{this.props.content}</h1>
                </div>
            </section>
        );
    }
});

module.exports = AmountRaised;
