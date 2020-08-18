import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from './event-models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Promise<IEvent[]> {
    return this.http.get<IEvent[]>('./assets/data.json').toPromise();
  }
}
