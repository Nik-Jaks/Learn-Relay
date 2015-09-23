'use strict';

var React = require('react');
var CinemaTicket = require('./cinemaTicket.js');

var App = React.createClass({

  render() {
    return (
      <CinemaTicket
        seat="A5"
        movie={{
          title: 'The Parent Trap',
          rating: 'PG'
        }}
        ticketType={{
          name: 'student',
          price: 2
        }}
      />
    )
  }
});

module.exports = App;
