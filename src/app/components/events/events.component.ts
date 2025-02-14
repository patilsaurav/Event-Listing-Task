import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  // Load all events
  loadEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  // Navigate to the Add Event page
  addEvent() {
    this.router.navigate(['/add-event']);
  }

  // Confirm before deleting an event
  confirmDelete(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.deleteEvent(id);
    }
  }

  // Delete an event
  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(() => {
      alert('Event deleted successfully!');
      this.loadEvents(); // Refresh the list after deletion
    });
  }
}
