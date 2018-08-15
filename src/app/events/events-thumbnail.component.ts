import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'events-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: \${{event.price}}</div>
  <div>
    <span>Location: {{event.location.address}}</span>

    <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
  </div>
  </div>
  `
})

export class EventsThumbnailComponent {
  @Input() event: any;
  someProperty: any =  'some value' ;

  logfoo() {
    console.log('f00');
  }
}

