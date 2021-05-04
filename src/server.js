// import required node_modules
// ! DO NOT CHANGE ANYTHING HERE.
// ! CHANGING ANYTHING HERE MIGHT BREAK THE APP
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
// ------------------------------------------------------------------------
// 
// import required created files
const routes = require("./routers");

// initialize express app
const app = express();

// /////////////////////    CORS    /////////////////////////////////////////
// ! DO NOT CHANGE ANYTHING HERE
//
// allow all cross-origin requests
// app.use(cors());
//
// allow cors only for localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
// /////////////////////    CORS END /////////////////////////////////////////

// log all requests in console
app.use(morgan("dev"));

// ///////////////    Compulsory Middlewares    //////////////////////////////
// ! DO NOT CHANGE ANYTHING HERE
// to parse json body data from requests (i.e req.body)
app.use(express.json());
// to parse data from x-urlencoded-forms
app.use(express.urlencoded({ extended: true }));
// ///////////////    Compulsory Middlewares END /////////////////////////////

// //////////////////////////////    ROUTES   ////////////////////////////////

app.get("/", (req, res) => {
  res.send("nothing to send here.");
});

// login the user
app.post("/login", routes.login);

// test route
app.use("/test", passport.authenticate("jwt", { session: false }), routes.test);

// TODO in actual app
// app.use("/dashboard", routes.dashboard);
// app.use("/jobs-applied", routes.jobs-applied);
// app.use("/all-jobs", routes.all-jobs);
// ///////////////////////////    ROUTES END  ////////////////////////////////

// Handle errors.
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
