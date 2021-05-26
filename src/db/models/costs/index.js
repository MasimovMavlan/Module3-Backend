const mongoose = require("mongoose");

const { Schema } = mongoose;

const costScheme = new Schema({
  seller: String,
  price: Number,
  date: String,
});

module.exports = Cost = mongoose.model("costs", costScheme);
