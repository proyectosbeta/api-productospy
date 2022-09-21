import mongoose from 'mongoose';

const schema = mongoose.Schema({
  url: String,
  method: String,
  ip: String,
  geo: Object,
  date: { type: Date, default: Date.now },
});
const Log = mongoose.model('Log', schema);

export default Log;
