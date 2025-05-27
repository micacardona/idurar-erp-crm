const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  unit: String,
  taxRate: Number,
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Products', ProductSchema);