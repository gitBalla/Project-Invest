# Project-Invest: https://devfund.azurewebsites.net/
## _The developer crowdsourcing platform_

Team members: John Balla, Rebecca Galletta, Toby Rutherford, Vincent Tran

Developed in the Enterprise Systems Development capstone course Advanced Software Development, at University of Technology Sydney

## Features

- Create and view project listings seeking investments & developers
- Feature 2
- Feature 3

Our goal is to make it more convenient for developers to seek investment for their projects, and even for our users to seek more developers for their teams. To do this we want to create a project-sharing tool for developers to reach out to investors and other developers, and for developers and investors alike to find projects, join them, and follow them.

## Tech

Project-Invest uses a number of technologies:

- [node.js] - Javascript runtime
- [Express] - fast node.js web framework
- [ReactJS] - Component-based front-end library
- [Material-UI] - ReactJS UI library
- [Jest] - Javascript testing framework



## Installation

Project-Invest requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

Install dependencies:

```sh
cd simple-react-app
npm install
```
```sh
cd simple-node-server
npm install
```

## Development

Open your favorite Terminal and run these commands.

Deploy locally:

Navigate to project-invest/simple-react-app/src/components/utilityComponents/currentAPI.js

Switch from deployed server to commented localhost link.

```sh
cd simple-node-server
npm run serve
```
```sh
cd simple-react-app
npm start
```
Navigate to webapp and server deployed locally in your preferred browser.

Server:
```sh
localhost:1337
```
Web App:
```sh
localhost:3000
```

#### Building for source

For production release:

```sh
cd simple-react-app
npm run build
```

Running build file:

Install serve globally if not installed.

```sh
npm install -g serve
```

```sh
cd simple-react-app
serve build
```

## Testing

Jest is used to run tests.

Running tests:
```sh
cd simple-react-app
npm run test
```
Running all at once:
```sh
cd simple-react-app
npm run test:ci
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [ReactJS]: <http://reactjs.org>
   [Material-UI]: <https://mui.com>
   [Jest]: <http://jestjs.io>
