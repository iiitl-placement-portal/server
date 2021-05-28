const JobModel = require("../../database/models/job.model");
const StudentModel = require("../../database/models/student.model");
const JobFilter = require("../../utils/jobsEachFilter");

module.exports = async (req, res) => {
    const jobId = req.params.id;
    const studentId = req.user._id;
    console.log(studentId);
    console.log(jobId);

    let student = await StudentModel.findById(studentId);
    let job = await JobModel.findById(jobId);

    const found = student.jobApplied.find(x => x == jobId);
    if (!found) {
        student.jobApplied.push(jobId);
        job.studentsApplied.push(studentId);
    }

    await StudentModel.findByIdAndUpdate(studentId, student);
    await JobModel.findByIdAndUpdate(jobId, job);
    
    res.send("OK");
};