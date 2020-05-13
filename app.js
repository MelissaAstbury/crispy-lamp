const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const config = require("./config");

//Import Routes
const postsRoute = require("./routes/posts");

// Connect to Database
mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    `mongodb+srv://${config.user}:${config.password}@cluster-fuqu4.mongodb.net/crispy_lamp?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Connection Failed!", err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

//Routes
app.use("/posts", postsRoute);

//How to listen to the server
app.listen(8000);
