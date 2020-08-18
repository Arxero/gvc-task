import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IEventViewModel, EventEditableProperties } from '../event-models';
import * as moment from 'moment';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss'],
})
export class TableInputComponent implements OnInit {
  @Input() event: IEventViewModel;
  @Input() eventEditableProperty: EventEditableProperties;
  input: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.input = new FormControl(this.getValue());

    this.input.valueChanges.subscribe((v) => {
      switch (this.eventEditableProperty) {
        case EventEditableProperties.EventName:
          this.event.eventName = v;
          break;

        case EventEditableProperties.OddsForFirstTeam:
          this.event.oddsForFirstTeam = v;
          this.event.oddsForFirstTeamVM =  Number(v).toFixed(2);
          break;

        case EventEditableProperties.OddsForDraw:
          this.event.oddsForDraw = v;
          this.event.oddsForDrawVM = Number(v).toFixed(2);
          break;

        case EventEditableProperties.OddsForSecondTeam:
          this.event.oddsForSecondTeam = v;
          this.event.oddsForSecondTeamVM = Number(v).toFixed(2);
          break;

        case EventEditableProperties.EventStartDate:
          this.event.eventStartDate = moment(v).toISOString();
          this.event.eventStartDateVM = v;
          break;
      }
    });
  }

  private getValue(): string {
    switch (this.eventEditableProperty) {
      case EventEditableProperties.EventName:
        return this.event.eventName;

      case EventEditableProperties.OddsForFirstTeam:
        return this.event.oddsForFirstTeamVM;

      case EventEditableProperties.OddsForDraw:
        return this.event.oddsForDrawVM;

      case EventEditableProperties.OddsForSecondTeam:
        return this.event.oddsForSecondTeamVM;

      case EventEditableProperties.EventStartDate:
        return this.event.eventStartDateVM;
    }
  }
}
