const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(require("./routes/categories.route"));
app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"));

mongoose.connect(
  "mongodb+srv://Umar:Umar2002@cluster0.lfxnu2y.mongodb.net/news?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("База подключена");
  }
);

app.listen(3000, () => {
  console.log("started");
});
