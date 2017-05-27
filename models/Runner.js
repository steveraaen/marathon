var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RunnerSchema = new Schema({

  Name: {
    type: String,
    required: true
  },

  Age: {
    type: Number,
    required: true
  },

  Country: {
    type: String,
    required: true
  },

    Overall: {
    type: Number,
    required: true
  }
});

var Runner = mongoose.model("Runner", RunnerSchema);

module.exports = Runner;
