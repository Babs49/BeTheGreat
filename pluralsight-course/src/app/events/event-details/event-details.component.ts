import { Component, OnInit } from '@angular/core';
import { EventService } from '../core/event.service';
import { IEvent } from '../../model/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event!: IEvent | undefined;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }

}
