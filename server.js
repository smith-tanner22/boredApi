const express = require('express');
const app = express();
// test 2
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  })
  .use('/', require('./Routes'));

const port = process.env.PORT || 8080;
app.listen(port)
