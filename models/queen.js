const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queenSchema = new Schema({
  name: String,
  royalJellyFlavor: String,
  drones: [{type: Schema.Types.ObjectId, ref: 'Drone'}]
});

module.exports = mongoose.model('Queen', queenSchema);
