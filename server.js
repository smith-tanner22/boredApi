const express = require('express');
const app = express();
// test 2
app.get('/', function (req, res) {
  res.send('Hello World');
});

const port = process.env.PORT || 8080;
app.listen(port)
