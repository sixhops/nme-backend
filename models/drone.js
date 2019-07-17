const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: String,
  job: String
});

module.exports = mongoose.model('Drone', droneSchema);
