const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const app = express();

//Body Parser middleware
app.use(bodyParser.json());

//Connect to mongodb
mongoose.connect(
  "mongodb://localhost:27017/mern-shop-app",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;

    console.log("Database online");
  }
);

//Use routes
app.use("/api/items", items);

//Configures the server port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
