var path = require('path');
var express = require('express');

var app = express();
var compiler = webpack(config);

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, (err) => {
  if (err) console.log(err);

  console.log(`Listening at http://${HOST}:${PORT}`);
});
