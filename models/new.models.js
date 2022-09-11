const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  _categoriesId: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
