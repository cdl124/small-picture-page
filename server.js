'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('app'));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
