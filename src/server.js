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
const uploadJsonData = require("./utils/uploadJsonData");
const deleteAllData = require("./utils/deleteAllCollection");

// to be removed later
const announcementModel = require("./database/models/announcement.model");
const addNewCompany = require("./utils/addNewCompany");
const addNewJob = require("./utils/addNewJob");
const {
  markAsRead,
  deleteNotification,
} = require("./controllers/notification.controller");

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

// test route
// app.use("/test", passport.authenticate("jwt", { session: false }), routes.test);

// login the user
app.post("/login", routes.login);
app.get(
  "/verifyToken",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send({ isTokenValid: "valid" });
  }
);

app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  routes.profile
);

app.get("/announcement", async (req, res) => {
  const data = await announcementModel.find({});
  res.status(200);
  res.json(data);
});

// Calling notifications using /profile
// app.get("/notification",
//   passport.authenticate("jwt", { session: false }),
//   routes.notification
// );

/* get request body example
{ "password":"XYZ"} 
*/
app.get(
  "/reset-password",
  passport.authenticate("jwt", { session: false }),
  routes.resetPassword
);

/* get request body example
{ "contactNo":"123XXXX"} 
*/
app.get(
  "/update-phone-number",
  passport.authenticate("jwt", { session: false }),
  routes.updateContactNo
);

app.use("/jobs",
  passport.authenticate("jwt", { session: false }), 
  routes.jobs);

app.use(
  "/companies",
  passport.authenticate("jwt", { session: false }),
  routes.companies
);

app.post("/uploadJsonData", uploadJsonData);
app.post("/deleteAllData", deleteAllData);

app.post("/addNewCompany", addNewCompany);
app.post("/addNewJob", addNewJob);

app.post(
  "/markAsRead",
  passport.authenticate("jwt", { session: false }),
  markAsRead
);

app.post(
  "/deleteNotification",
  passport.authenticate("jwt", { session: false }),
  deleteNotification
);

// ///////////////////////////    ROUTES END  ////////////////////////////////

// Handle errors.
app.use(function (err, req, res, next) {
  // console.log(req)
  console.error(">ERROR", err.name, err.message);
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
