import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Name is required but will be supplied as 'Anonymous' if not given by user
// Time is in seconds
let ScoreSchema = new Schema({
  name: {type: String, required: true, max: 100},
  time: {type: Number, required: true}
});

module.exports = mongoose.model('Score', ScoreSchema);