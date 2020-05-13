const config = require("./config");

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
