const JobModel = require("../../database/models/job.model");
const StudentModel = require("../../database/models/student.model");
const JobFilter = require("../../utils/jobsEachFilter");
const CheckElig = require("../../utils/checkEligibility");


module.exports = async (req, res) => {
    const jobId = req.params.id;
    job = await JobModel.findById(jobId).populate("company");
    const student = await StudentModel.findById(req.user._id);
    let check = CheckElig(job, student);
    Object.assign(job, check);
    // console.log(job);
    // let data = JobFilter(job);
    // console.log(data);
    // console.log(job.isElig);
    res.send(job);
};