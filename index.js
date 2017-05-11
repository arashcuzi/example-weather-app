const express = require('express');
const weatherData = require('./data');
const utils = require('./utils');

const app = express();

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env;

// default route to check app is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// mock endpoint to get the /weather mock or call the fictional api
app.get('/weather', (req, res) => {
  const data = utils.getWeather(true); // call mock
  res.status(200).json(data); // return data to client
});

// start server and listen on host:port
app.listen(PORT, HOST, (err) => {
  if (err) console.log(err);

  console.log(`Listening at http://${HOST}:${PORT}`);
});
