'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/html/index.html');
});


app.get('/meusProjetos', (req, res) => {
  res.sendFile(__dirname+'/html/index.html');
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname+'/html/sobre.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
