import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event = { title: '', date: '', location: '' }; // Event object

  constructor(private eventService: EventService, private router: Router) {}

  addEvent() {
    if (this.event.title && this.event.date && this.event.location) {
      this.eventService.addEvent(this.event).subscribe(() => {
        alert('Event added successfully!');
        this.router.navigate(['/events']); // Navigate to the Event List page
      });
    } else {
      alert('Please fill all fields before submitting!');
    }
  }
  goBack() {
    this.router.navigate(['/events']); // Replace '/events' with your desired route
  }
}
