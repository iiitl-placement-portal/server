const express = require("express");
const routes = require("./routers");
const morgan = require("morgan");

const app = express();

// log all requests in console
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("nothing to send here.");
});

// test route
app.use("/test", routes.test);

// TODO in actual app
// app.use("/dashboard", routes.dashboard);
// app.use("/jobs-applied", routes.jobs-applied);
// app.use("/all-jobs", routes.all-jobs);

module.exports = app;
