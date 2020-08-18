import { EventsService } from './events.service';
import { Component, OnInit } from '@angular/core';
import { IEventViewModel, mapEvent, EventBGColor, EventEditableProperties } from './event-models';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  events: IEventViewModel[];
  displayedColumns: string[] = [
    'eventName',
    'oddsForFirstTeam',
    'oddsForDraw',
    'oddsForSecondTeam',
    'eventStartDate',
  ];
  isEditMode: boolean;


  get eventEditableProperties() {
    return EventEditableProperties;
  }

  constructor(private eventsService: EventsService) {}

  async ngOnInit(): Promise<void> {
    const tempEvents = await this.eventsService.getEvents();
    this.events = tempEvents.map((v, i) => mapEvent(v, i + 1));
  }

  onEditMode(): void {
    this.isEditMode = !this.isEditMode;

    if (
      this.displayedColumns.includes('eventID') &&
      this.displayedColumns.includes('actions')
    ) {
      this.events.map((x) => (x.background = x.originalBackground));
      this.displayedColumns.pop();
      this.displayedColumns.shift();
    } else {
      this.events.map((x) => (x.background = EventBGColor.NoColor));
      this.displayedColumns.unshift('eventID');
      this.displayedColumns.push('actions');
    }
  }

  onSaveEvent(id: number): void {
    const currentEvent = this.events.find(x => x.eventID === id);
    currentEvent.isEditMode = false;
  }

  onDeleteEvent(id: number): void {
    this.events = this.events.filter(x => x.eventID !== id);
  }

  onAddNew(): void {
    const newEvent: IEventViewModel = {
      eventID: this.events.length + 1,
      eventStartDate: moment().hour(23).minutes(59).toISOString(),
      eventStartDateVM: moment().hour(23).minutes(59).format('DD/MM/YYYY HH:mm')
    } as IEventViewModel;

    this.events.push(newEvent);
    this.events = _.cloneDeep(this.events);
  }

  onRowEdit(id: number, oddType?: EventEditableProperties): void {
    const currentEvent = this.events.find(x => x.eventID === id);
    currentEvent.isEditMode = this.isEditMode ? true : currentEvent.isEditMode;

    if (!this.isEditMode && oddType) {
      console.log(`EventID: ` + currentEvent.eventID);
      console.log(`Odd Type: ` + oddType);
      console.log(`Odd Value: ` + currentEvent[oddType]);
    }
  }
}
