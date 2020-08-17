//Requiring our modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//heroku/local port number
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));
//requiring api/html routes
require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);
//connecting through mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});



//port listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});