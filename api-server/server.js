const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

function app() {
  const server = express();

  server.use(cors());
  server.use(morgan('combined'));
  
  server.set('view engine', 'html');

  server.get('/api/whoami', (req, res, next) => {
    res.json({'message': 'ok'});
  });

  server.get('/api/login', (req, res, next) => {
    res.status(400).json({'message': 'session_already_available'});
  });

  return server;
}

function run() {
  const port = process.env['PORT'] || 5000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
