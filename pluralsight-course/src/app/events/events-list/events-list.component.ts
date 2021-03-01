import { Component, OnInit } from '@angular/core'
import { EventService } from '../core/event.service';
import { ToastrService } from '../../shared/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl : './events-list.component.html',
})

export class EventsListComponent implements OnInit {
  events : any[] = [];
  constructor(private eventService : EventService, private toastr : ToastrService ){

  }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();  
  }

  handleThumbnailEvent(name : string) {
    this.toastr.success(name);

  }
  

}