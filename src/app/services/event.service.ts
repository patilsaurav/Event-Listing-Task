import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'https://localhost:7033/api/events'; // Full API URL


  constructor(private http: HttpClient) {}

  // GET all events
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST a new event
  addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }

  // DELETE an event by ID
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
