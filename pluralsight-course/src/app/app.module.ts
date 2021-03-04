import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventThumbnailComponent, EventDetailsComponent, EventsListComponent, CreateEventComponent} from './events/index';
import { Error404Component } from './errors/404.component';
import { ProfilComponent } from './feature/user/profil/profil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserModule } from './feature/user/user.module';
import { AuthService } from './feature/user/core/auth.service';
import { EventRouteActivatorService } from './events/core/event-route-activator.service';
import { EventService } from './events/core/event.service';
import { EventListResolver } from './events/core/events-list-resolver.service';
import { ToastrService } from './shared/toastr.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule
  ],
  providers: [{provide : 'canDeactivateCreateEvent', useValue : checkDirtyState},
  AuthService,
  EventRouteActivatorService,
  EventService,
  EventListResolver,
  ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean{
if (component.isDirty){
  return window.confirm('Evènement non sauvegardé, voulez-vous vraiment quitter ? ');
}
return true;
}
