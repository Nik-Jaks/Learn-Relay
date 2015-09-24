'use strict';

export class Ticket extends Object {}
export class Movie extends Object {}
export class Price extends Object {}


var ticket = new Ticket();


ticket.id = '1';
ticket.movie = '20151';
ticket.seat = 'A1';
ticket.price = '1';

export function getTicket() { return ticket; }

export function getMovie(id) {
  // console.log(id);
  // if (id==='20151') {
    var movie = new Movie();
    movie.id = '20151';
    movie.title = 'Le Diner de Cons';
    movie.rating = '12A';
    return movie;
  // } else {
  //   return id;
  // }
}

export function getPrice(id) {
  console.log(id);
  if (id==='1') {
    var price = new Price();
    price.id = '1';
    price.type = 'Standard';
    price.amount = '£10.00';
    return price;
  } else {
    return null;
  }
}
