# Spencer's Event Discovery

This is an event finder using the public Ticketmaster API. This project was made in React-Redux. 

## Installation:

1. Clone to desktop.
2. Run "npm install"
3. Insert missing API keys from ticketmaster into the .env file.
4. Run "npm start" to run the application locally, or "npm run build" to transpile and minify the project.

## Requirements:

| User Story | Description                                                                                      | Acceptance Criteria                                                                                                                                                 | Completed? |   |
|------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|---|
| 1          | As a user, I would like to see a list of events that are available.                              | 1. Events page accessible from nav (also home page) 2. Events from TicketMaster display in boxes in the center of the screen.  Scrolling is possible.               |            |   |
| 1.1        | Basic pagination for above list.                                                                 | 1. Pagination allowing for viewing more events than the default API limit.                                                                                          |            |   |
| 1.2        | List by event keyword (e.g festival)                                                             | 1. A searchbox that allows for custom API keyword calls.                                                                                                            |            |   |
| 1.3        | List by location (e.g Melbourne)                                                                 | 1. A searchbox that allows for custom API location calls.                                                                                                           |            |   |
| 1.4        | Events include an image, a summary, categories etc. (Depends on API return values)               | 1. Includes an image 2. Includes a summary 3. Includes categories                                                                                                   |            |   |
| 2          | As a user, I would like to be able to view more information about an event in the list from US1. | 2.1 and 2.2 pass                                                                                                                                                    |            |   |
| 2.1        | Button available on each item in list.                                                           | Each item from US1 has a button that jumps to the page from 2.2 with this event already input.  This allows for viewing of all details from the API for this event. |            |   |
| 2.2        | Event code lookup searchbox with URL access.                                                     | 1. Event search page accessible from Nav. Searchbox here that allows for event code input.                                                                          |            |   |
| 3          | As a user, I would like to see contact details for the website creator/admin.                    | 1. About page accessible from navbar.                                                                                                                               |            |   |