'use strict';

export class Ticket extends Object {}

var ticket = new Ticket();

ticket.id = '1';
ticket.title = 'Le Diner de Cons';
ticket.rating = '12';

export function getTicket() { return ticket; }
