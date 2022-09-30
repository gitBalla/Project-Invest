const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/dev');
const projects = require('./routes/api/projects');
const users = require('./routes/api/users');

// Connect to MongoDB database
mongoose.connect(config.dbUrl, { useNewUrlParser: true }).then(() => {
  const app = express();
  const port = process.env.PORT || 1337;

  app.use(express.json());
  app.use(cors());

  // Configuring body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Projects route
  app.use('/api/projects', projects);
  // Users route
  app.use('/api/users', users);

  app.get('/details', (req, res) => {
    res.send({ data: 'Hello World, from express' });
  });

  app.listen(port, () =>
    console.log(`Project-invest listening on port ${port}!`)
  );
});
