# Spencer's Event Discovery

This is an event finder using the public Ticketmaster API. This project was made with React, Redux, and Semantic UI React library.

The compiled site can be found on GitHub pages [here.](https://spencerjp.github.io/spence-tm-discovery/)
I have also uploaded it to AWS S3 as a static site. It is accessible [here.](http://spence-tm-discovery.s3-website-ap-southeast-2.amazonaws.com/)

## Installation:

1. Clone to desktop.
2. Run "npm install"
3. Run "npm start" to run the application locally, or "npm run build" to transpile and minify the project.

## Testing:

1. Clone to desktop.
2. Run "npm install"
3. Run "npm test" to run the jest tests.

## Requirements:

| User Story | Description                                                                        | Acceptance Criteria                                                                                                                                  | Completed? |
| ---------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1          | As a user, I would like to see a list of events that are available.                | 1. Events page accessible from nav (also home page) 2. Events from TicketMaster display in boxes in the center of the screen. Scrolling is possible. | Yes        |
| 1.1        | Basic pagination for above list.                                                   | 1. Pagination allowing for viewing more events than the default API limit.                                                                           | Yes        |
| 1.2        | List by event keyword (e.g festival)                                               | 1. A searchbox that allows for custom API keyword calls.                                                                                             | Yes        |
| 1.3        | List by country (e.g Australia)                                                    | 1. A searchbox that allows for custom API location calls.                                                                                            | Yes        |
| 1.4        | Events include an image, a summary, categories etc. (Depends on API return values) | 1. Includes an image 2. Includes a summary                                                                                                           | Yes        |
| 2          | As a user, I would like to see contact details for the website creator/admin.      | 1. About page accessible from navbar.                                                                                                                | Yes        |
