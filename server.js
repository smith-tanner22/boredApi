const express = require('express');
const app = express();
// test
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
