const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

//Configures the server port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
