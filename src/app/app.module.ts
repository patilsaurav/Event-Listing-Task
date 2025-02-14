import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import this module
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
