import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// This information will all be supplied manually; model is non-interactive to
// users.
let TargetSchema = new Schema({
  name: {type: String, required: true, max: 100},
  topLeft: {type: Array, required: true},
  topRight: {type: Array, required: true},
  bottomLeft: {type: Array, required: true},
  bottomRight: {type: Array, required: true},
});

export default mongoose.model('Target', TargetSchema);