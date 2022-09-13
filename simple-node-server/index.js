const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Projects route
app.use('/api/projects', require('./routes/api/projects'));

app.get('/details', (req, res) => {
  res.send({ data: 'Hello World, from express' });
});

app.listen(port, () =>
  console.log(`Project-invest listening on port ${port}!`)
);
