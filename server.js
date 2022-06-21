const express = require('express');
const app = express();
// test 2
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
