## Insights news

This project was built for a tech test. PHP is used to extract data from a JSON file and React JS is used to display this data.

## Getting Started

The instructions below will allow you to get a copy of this project up and running on your local machine for development purposes.

### Prerequisites

- Node.js (13.7.0)
- NPM - Node Package Manager (6.13.7)
- PHP

## Installing

1. Fork the project and clone to your local environment:

   `git clone your-forked-url`

cd into the project file. 

2. Install dependencies:

    `npm i`

## Run PHP script on local host

Before launching the react app run the following command in the terminal.

`$ php -S localhost:8000`

This will make the extracted data available at the endpoint http://localhost:8000. If a different port is required for your local environment then change the port number in the src/components/ArticleList get request also.

```js
Axios.get('http://localhost:[YOUR_PORT_NUMBER]')
```

## Launching react app

In a new terminal (leave the previous one running the PHP script open) use the following command to start the react app.

    `npm start`

This will start a server hosted on port 3000.

### Built with

- **PHP** - [Hypertext Preprocessor](https://www.php.net/)
- **Node.js** - [JavaScript runtime built on Chrome's V8 JavaScript engine](https://nodejs.org/en/)
- **React** - [A JavaScript library for building user interfaces](https://reactjs.org/)
- **Axios** - [Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)
- **AOS** - [Animation On Scroll](https://michalsnik.github.io/aos/)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
