import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ScoreSchema = new Schema({
  name: {type: String, required: true, max: 100},
  time: {type: Number, required: true}
});

module.exports = mongoose.model('Score', ScoreSchema);