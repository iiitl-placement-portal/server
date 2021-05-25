const JobModel = require("../database/models/job.model");

module.exports = async (req, res) => {
  // console.log(req);
  const job = await JobModel.find({}).populate(
    "studentsApplied"
  );
  // console.log("student", student);
  res.send(job);
};