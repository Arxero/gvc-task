# GvcTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Start

Run `npm i` then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description
There is a task for developing a simple project for sports betting. It consists of a webpage containing a
grid with sport matches for gambling, backend web service that stores the data in a DB or file.

## Detailed requirements:

1. The webpage will display sport events, odds for the participants in the events and start date of each
event.
2. The webpage supports two view modes – ‘Preview’ and ‘Edit’
3. Each event has EventID, EventName, OddsForFirstTeam, OddsForDraw, OddsForSecondTeam,
EventStartDate fields stored in (and read from) a storage.
4. EventID is a unique number identifier
5. EventName is a string representing two participants playing against each other
6. Each odd is a double number greater or equal to 1 and displayed rounded to the second decimal
digit
7. EventStartDate is Date in UTC format
8. Initially events are displayed In ‘Preview Mode’ table-like in which visible fields are EventName,
OddsForFirstTeam, OddsForDraw, OddsForSecondTeam, EventStartDate:

![](https://i.imgur.com/ZOoitth.png)

9. Odd rows have background-color: AliceBlue and Even rows have background-color: HoneyDew
10. Events whose StartDate has passed are with background-color: LightSalmon
11. At the top right corner of the page there is ‘Edit Mode’ button
12. When ‘Edit’ Button is pressed website switches to edit mode:

![](https://i.imgur.com/DTgKrfy.png)

13. In edit mode there is no color styling of the rows
14. In edit mode at the end of each event occur ‘Save’ and ‘Delete’ buttons
15. EventName, OddsForFirstTeam, OddsForDraw, OddsForSecondTeam, EventStartDate are available
for changes when the edit mode is present and EventID is not (only visible). When user clicks on a
field he enters in edit mode and can type in the new value. Changes in events are saved when
corresponding ‘Save’ button is pressed.
16. Event can be deleted when pressing ‘Delete’ button at the end of the corresponding event.
17. At the bottom of the grid in edit mode there is ‘Add New Event’ button.
18. When pressed ‘Add New Event’ adds a new row for a new event with EventStartDate being prefilled
with 23:59 (11:59 PM) on the current day (in the storage are saved only EventID and
EventStartDate).
19. In edit mode on the top on the right corner of the page there is ‘Preview Mode’
20. When pressed ‘Preview Mode’ returns the user back to the preview mode in which the buttons for
editing, deleting and adding are no longer present and the fields of the events are not editable.
21. When an odd from an event is clicked in ‘Preview Mode’ it prints in the console ‘A B C’ where A is
the EventID of the event, B is the type of the ODD (one of the 3 types - OddsForFirstTeam/
OddsForDraw/ OddsForSecondTeam) and C is the Odd Value (3.25 for example)
22. Web service can use WCF, WebAPI or any other suitable technology.
23. Write in Unit tests for both – front end and back end if possible.



