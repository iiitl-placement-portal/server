const JobModel = require("../../database/models/job.model");
const JobFilter = require("../../utils/jobsEachFilter");

module.exports = async (req, res) => {
    const jobId = req.params.id;
    const job = await JobModel.findById(jobId).populate("company");
    // console.log(job);
    let data = JobFilter(job);
    //console.log(data);
    res.send(data);
};