const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bees');
const db = mongoose.connection;
// Mongoose event listeners
db.once('open', () => {
  // Prints once on connection
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
db.on('error', (err) => {
  // Prints out any error
  console.log(`Database error:\n${err}`);
});

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send("API located at /api");
});

app.use('/api', require('./routes/api'));

app.listen(3001, () => {
  console.log('HTTP Server started on port 3001');
});
