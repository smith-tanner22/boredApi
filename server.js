const express = require('express');
const cors = require('cors');
const mongodb = require('./DataBase/dbConnect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser');
const app = express();
// test 2

var options = {
  explorer: true,
};

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
  })

  .use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
  console.log(
    process.stderr.id,
    `Caught exception ${err}\n` + `Exception origin: ${origin}`
  );
});
// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     next();
//   })
//   .use('/', require('./Routes'));

const port = process.env.PORT || 3000;
app.listen(port);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
