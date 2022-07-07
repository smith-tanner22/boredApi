const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Bored API',
    description: 'This will commands for various lanaguages and Frameworks',
  },
  host: 'cse341boredapi.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./Routes/ideas.js', './Routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
