var express = require('express');

var app = express();

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env;

app.use(express.static('public'));

app.listen(PORT, HOST, (err) => {
  if (err) console.log(err);

  console.log(`Listening at http://${HOST}:${PORT}`);
});
