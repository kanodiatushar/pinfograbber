const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
    default: Date.now
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
