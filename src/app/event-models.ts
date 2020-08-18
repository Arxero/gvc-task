import * as moment from 'moment';

export interface IEvent {
  eventID: number;
  eventName: string;
  oddsForFirstTeam: number;
  oddsForDraw: number;
  oddsForSecondTeam: number;
  eventStartDate: Date | string;
}

export interface IEventViewModel extends IEvent {
  eventStartDateVM: string;
  background: EventBGColor;
  originalBackground: EventBGColor;
  isEditMode: boolean;
  oddsForFirstTeamVM: string;
  oddsForDrawVM: string;
  oddsForSecondTeamVM: string;
}

export enum EventBGColor {
  NoColor = 'white',
  HoneyDew = 'honeydew',
  AliceBlue = 'aliceblue',
  LightSalmon = 'lightsalmon',
}

export enum EventEditableProperties {
  EventName = 'eventName',
  OddsForFirstTeam = 'oddsForFirstTeam',
  OddsForDraw = 'oddsForDraw',
  OddsForSecondTeam = 'oddsForSecondTeam',
  EventStartDate = 'eventStartDate'
}

export function mapEvent(event: IEvent, index: number): IEventViewModel {
  let bgColor: EventBGColor = index % 2 === 0 ? EventBGColor.HoneyDew : EventBGColor.AliceBlue;
  bgColor = moment(event.eventStartDate).isBefore(moment()) ? EventBGColor.LightSalmon : bgColor;

  return {
    ...event,
    oddsForFirstTeamVM: event.oddsForFirstTeam.toFixed(2),
    oddsForDrawVM: event.oddsForDraw.toFixed(2),
    oddsForSecondTeamVM: event.oddsForSecondTeam.toFixed(2),
    eventStartDateVM: moment(event.eventStartDate).format('DD/MM/YYYY HH:mm'),
    background: bgColor,
    originalBackground: bgColor,
    isEditMode: false
  } as IEventViewModel;
}
