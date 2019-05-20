# Mango (Health Appointment Tracker)

1. [Description](#description)
1. [Goals](#Goals)
1. [Planning](#Planning)
1. [Notes](#notes)
1. [Installation](#Installation)
1. [License](#license)

### Description

This is my capstone project for Epicodus to be created with React. It is inspired by my family and some of their challenges to keep track of their health appointments. This app is largely geared towards middle age and elderly people. This app will allow people to track their health appointments in chronological order as well as find the route and transportation (future goal) to their appointment. There will be a login aspect and the information will be stored in a MySQL database.

May 3: Phase 1

8:00 - 10:00 Initial Planning

10:00 - 11:00 Research differences between SQL and NoSQL; sticking with SQL because I will have static data

11:00 - 12:00 Watch and read how to use SQL with node JS

12:00 - 1:00 Lunch

1:00 - 2:00 Research react native vs PWAs: conflicted on what to choose mostly because of who will download my app (international or domestic)

2:00 - 3:00 Watch an uber api integration Youtube video and read through docs (looks like it will be difficult - stretch goal)

3:00 - 4:00 Look into hosting options: Heroku, AWS serverless, firebase, netlify (have to weigh cost vs learning oppurtunity)

4:00 - 4:30 Research React styled-components libraries. Leaning towards Rebass since it's lightweight and easy to use

May 10: Phase 2

8:00 - 3:00 Create static site

3:00 - 4:30 Research implementing Google maps and uber api

### Goals

 __Tasks :__

         - [ ] Add appoinment
         - [ ] Add Google Maps route from home location to appointment address

 __MVP :__

         - [ ] Logo
         - [ ] Login Page
         - [ ] Sign-up Page
         - [ ] Google maps routing
         - [ ] Login Authentication
         - [ ] Professional readme
         - [ ] Routing
         - [ ] Mobile friendly
         - [ ] State Management
         - [ ] History page


 __Stretch Goals :__

         - [ ] make into PWA
         - [ ] React Hook
         - [ ] Add ability to link to or call uber
         - [ ] Use oauth
         - [ ] Show appointments on google calendar
         - [ ] Offline Service/Storage
         - [ ] Optimization

### User Stories

* As a health care patient, I want to see when my next appointments are
* As a user, I want to see the appointment information (date, doctor, reason for appointment, cost estimate) for planning and tracking purposes
* As a user, I want to see my history of appointments so I can keep track of my health

### Planning

UI Initial Sketch

![](src/assets/images/userInterfaceSketch.jpg)

Component Hierarchy

![](src/assets/images/ComponentTree.png)

## State Slices

* Username
* Password
* masterAppointmentList
* currentAppointmentList

### Notes

* Oauth is difficult to use.

### Installation

1. Clone or download this repository as zip
2. `npm i` in terminal
3. `npm run start`
4. Visit http://localhost:8080/ in browser


### License
