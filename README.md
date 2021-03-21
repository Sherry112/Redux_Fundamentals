This project is deployed on Firebase Hosting and accessed via [Redux Fundamentals](https://redux-fundamentals-38b26.web.app/).

All the fundamental concepts of Redux are incorporated in this project. The details are decribed in comments.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Project Setup](#project-setup)
- [Middleware](#middleware)
- [Data Logging](#data-logging)
- [Chrome Extension](#chrome-extension)
- [Changing State Immutably](#changing-state-immutably)
- [Firebase deployment](#firebase-deployment)


## Project Setup
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It uses Class based componenets for state management (by Redux).
Functional components are dummy and for presentation only.

## Middleware
The project use [Redux-Thunk](https://github.com/reduxjs/redux-thunk) for sending asynchronus requests. On pressing the store result button, this is executed.

## Data Logging
Apply middleware library provided by redux allows us to do data logging on every action dispatched.

## Chrome Extension
The project uses [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to get information in console, about the changes in  Redux Store. Moreover [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) are also used which provide info about the DOM structure.

## Changing State Immutably
Strong attention is given to change state immutabily so the app doesn't break down. This has been done using the spread operator[...]

## Firebase deployment
Project is hosted on Google Firebase console. The URL is https://redux-fundamentals-38b26.web.app/

