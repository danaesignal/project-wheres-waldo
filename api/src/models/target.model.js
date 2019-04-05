import { Model, Schema } from 'mongoose';

let TargetSchema = new Schema({
  name: {type: String, required: true, max: 100},
  topLeft: {type: Number, required: true},
  topRight: {type: Number, required: true},
  bottomLeft: {type: Number, required: true},
  bottomRight: {type: Number, required: true},
});

export default Model('Target', TargetSchema);