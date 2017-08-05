'use strict';

const React = require('react');

const ContactSupport = React.createClass({

    render: function () {
        return (
            <section id='contact-support'>
            <div className='row'>
            <h1>{this.props.content}</h1>
            </div>
            </section>
        );
    }
});

module.exports = ContactSupport;
