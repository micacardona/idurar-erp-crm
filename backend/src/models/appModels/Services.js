const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  hourlyRate: Number,
  taxRate: Number,
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Services', ServiceSchema);