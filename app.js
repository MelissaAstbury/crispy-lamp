const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//How to listen to the server
app.listen(8000);

const config = require("./config");

// mongoose.set("useCreateIndex", true);
// mongoose
//   .connect(
//     `mongodb+srv://${config.user}:${config.password}@cluster-fuqu4.mongodb.net/crispy_lamp?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => {
//     console.log("Connection Failed!", err);
//   });
