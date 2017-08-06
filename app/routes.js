'use strict';

const React = require('react');
const Main = require('./components/main');
const ReactRouterDom = require('react-router-dom');
const  BrowserRouter =ReactRouterDom.BrowserRouter;
const Switch = ReactRouterDom.Switch;
const Route = ReactRouterDom.Route;
const Link = ReactRouterDom.Link;

const Routes = {
    get: function (config) {
        return (
            <BrowserRouter>
                <Main config={config}/>
            </BrowserRouter>

        );
    }
};

module.exports = Routes;
