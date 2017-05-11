# Weather API Consuming App

This is an app created to demo an API call for weather data.

The JSON payload is parsed, and an array of cities is returned in decending temperature order.

The payload can be consumed any way necessary, in a template for a web app, or for passing to another service.

To install/run, make sure you have latest node, then clone the repo and run the following command:

```
npm install && npm start
```

That will install dependancies and run the server. Navigating to `localhost:3000` will yield 'Hello World!' and you can visit `localhost:3000/weather` to view a sample JSON payload.

This app has TDD tests using `tape` framework and you can run those tests by running the following command:

```
npm install && npm test
```

Feel free to view the tests, util functions, and anything else to get an idea of my style and thought process.
