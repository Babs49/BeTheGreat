import { Component, OnInit } from '@angular/core';
import { EventService } from '../core/event.service';
import { IEvent } from '../../model/event';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event!: IEvent | undefined;
  id = '';
  constructor(private eventService: EventService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
