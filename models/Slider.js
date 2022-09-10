const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  createDate: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updateDate: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports =
  mongoose.models.Slider || mongoose.model("Slider", sliderSchema);
