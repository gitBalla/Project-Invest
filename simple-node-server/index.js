const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/details', (req, res) => {
  res.send({ data: 'Hello World, from express' });
});

const projects = require('./data/projects.json');

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
