'use strict';

var React = require('react');
var App = require('./components/app.js');
var rootEl = document.body;

require('../styles/main.css');

React.render(
  <App />,
  rootEl
);
