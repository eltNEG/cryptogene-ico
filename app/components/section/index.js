'use strict';

const React = require('react');

const ICOPropTypes = require('../../prop_types/ico');
const About = require('./about');
const Footer = require('./footer');


const AmountRaised = require('./amount_raised');
const ContactSupport = require('./contact_support');
const CountDown = require('./count_down');
const ProjectDescription = require('./project_description');
const RoadMap = require('./roadmap');
const Team = require('./team');

const Section = React.createClass({
    propTypes: {
      },

    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.about}/>
                <ProjectDescription content={this.props.projectdescription}/>
                <RoadMap content={this.props.roadmap}/>
                <CountDown content={this.props.countdown}/>
                <AmountRaised content={this.props.amountraised}/>
                <Team content={this.props.team}/>
                <ContactSupport content={this.props.contactsupport}/>
                <Footer content={this.props.footer}/>
            </div>
        );
    }
});

module.exports = Section;
