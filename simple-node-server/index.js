const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/dev');
const projects = require('./routes/api/projects');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

// Connect to MongoDB database
try {
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
    // Profile route
    app.use('/api/profiles', profiles);

    app.get('/details', (req, res) => {
      res.send({ data: 'Hello World, from express' });
    });

    app.listen(port, () =>
      console.log(`Project-invest listening on port ${port}!`)
    );
  });
} catch (e) {
  console.log('Error when connecting to MongoDB Atlas');
}
