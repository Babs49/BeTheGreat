import { Component, OnInit } from '@angular/core'
import { EventService } from '../core/event.service';
import { ToastrService } from '../../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../model/event';

@Component({
  selector: 'events-list',
  templateUrl : './events-list.component.html',
})

export class EventsListComponent implements OnInit {
  events!: IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService, private activatedRoute: ActivatedRoute ){

  }
  ngOnInit(): void {
   this.events = this.activatedRoute.snapshot.data.events;
  }

  handleThumbnailEvent(name: string): void{
    this.toastr.success(name);
  }
}
