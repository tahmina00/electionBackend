const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  options: [{
    label: {
      type: String,
      required: true
    }
  }]
});

const Data = mongoose.model('Data', dataSchema);


module.exports = Data;