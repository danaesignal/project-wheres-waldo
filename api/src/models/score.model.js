import { Model, Schema } from 'mongoose';

let ScoreSchema = new Schema({
  id: {type: String, required: true, max: 100},
  name: {type: String, required: true, max: 100},
  time: {type: Number, required: true}
});

export default Model('Score', ScoreSchema);