import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { EventThumbnailComponent, EventDetailsComponent, EventsListComponent, CreateEventComponent} from './events/index';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/core/event-route-activator.service';
import { EventListResolver } from './events/core/events-list-resolver.service';

const routes: Routes = [
{path: 'events/new', component : CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent']},
{path: 'events', component : EventsListComponent, resolve : {events : EventListResolver}},
{path: 'events/:id', component : EventDetailsComponent, canActivate : [EventRouteActivatorService]},
{path: '404', component : Error404Component},
{path: '', redirectTo: '/events' , pathMatch: 'full'},
{path: 'user', loadChildren : './feature/user/user.module#UserModule'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
