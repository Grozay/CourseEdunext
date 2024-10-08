const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String },
  },
  {
    timestamps: true, versionKey: false
  }
);

module.exports = mongoose.model("Course", Course);
