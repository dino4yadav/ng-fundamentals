import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <h3>{{thumbnail.someProperty}}</h3>
 <events-thumbnail #thumbnail [event]="event1"> </events-thumbnail>
 <button class="btn btn-primary" (click)="thumbnail.logfoo()" >log me some foo</button>
  </div>
  `
})export class EventsListComponent {
    event1 = {
      id: 1,
      name: 'Angular Connect',
      date: '15/08/2018',
      time: '02:00 AM',
      price: '599.99',
      imageUrl: '/assets/images/Angular.png',
      location: {
        address: 'Barra 8',
        city: 'Knapur',
        country: 'India'
      }
    };
   }
