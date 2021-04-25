const express = require("express");
const dotenv = require("dotenv");
const app = require("./server");
// const cors = require("cors");

dotenv.config();
const port = process.env.PORT || 3001;

// stablish connection to DB
const { connectToDB } = require("./database");
connectToDB();

// // allow cross-origin requests
// app.use(cors);

// to parse json body data from requests (i.e req.body)
app.use(express.json());
// to parse data from x-urlencoded-forms
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listinening on port localhost:${port}`);
});
