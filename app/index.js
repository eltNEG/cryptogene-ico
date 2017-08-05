'use strict';

const ReactDOM = require('react-dom');

const Routes = require('./routes');

function getContentPath() {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return '/public/content.json';
    }
    return '/public/content.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        projectdescription: 'ProjectDescription',
        roadmap: 'RoadMap',
        countdown: 'CountDown',
        amountraised: 'AmountRaised',
        team: 'Team'
    };
}

ReactDOM.render(
    Routes.get({
        contentPath: getContentPath(),
        navigation: getNavigation()
    }),
    document.getElementById('app')
);
