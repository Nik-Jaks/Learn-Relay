'use strict';

var React = require('react');
var Relay = require('react-relay');
var App = require('./components/CinemaTicket');
var CinemaTicketHomeRoute = require('./routes/CinemaTicketHomeRoute');
var rootEl = document.body;

require('../styles/main.css');

React.render(
  <Relay.RootContainer Component={CinemaTicket} route={new CinemaTicketHomeRoute()}/>,
  rootEl
);
