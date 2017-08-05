'use strict';

const React = require('react');

//const ICOPropTypes = require('../prop_types/ico');
const SocialMedia = require('./social_media');

const Banner = React.createClass({
    propTypes: {
    },

    render: function () {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {this.props.about.name}
                    </h1>
                    {/*
                        <h3>{this.props.basics.summary}</h3>
                    */}
                    <br/>
                    <hr/>
                    <SocialMedia ulClass='social' profiles={this.props.about.profiles}/>
                </div>
            </div>
        );
    }
});

module.exports = Banner;
