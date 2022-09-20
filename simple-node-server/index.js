const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const projects = require('./routes/api/projects');

// Connect to MongoDB database
mongoose
  .connect(
    'mongodb+srv://admin:0E9rhRUxrrhlPrvC@cluster0.walpx4a.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    const port = process.env.PORT || 1337;

    app.use(express.json());
    app.use(cors());

    // Configuring body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Projects route
    app.use('/api/projects', projects);

    app.get('/details', (req, res) => {
      res.send({ data: 'Hello World, from express' });
    });

    app.listen(port, () =>
      console.log(`Project-invest listening on port ${port}!`)
    );
  });
