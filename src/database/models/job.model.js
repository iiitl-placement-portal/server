const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
	timestamp: {
		type: Date,
		required: true,
		default: Date.now
	},

	// Details of the comapany the job is posted by
	company: {
		type: Schema.Types.ObjectId,
		ref: "Companie"
	},
	// Description of the job
	jobDescription: {
		type: String
	},
	// Intern/Full
	recruitmentType: {
		type: String
	},
	duration: {
		type: String
	},
	postingLocation: {
		type: String
	},
	active: {
		type: String,
		default: true
	},

	//Student Eligibility
	eligibility: {
		type: Object
	},
	minCgpa: {
		type: String   //TODO: convert float
	},
	maxBacklogsAllowed: {
		type: String
	},

	//Package
	package: {
		type: String
	},

	// registration deadline
	deadlineDate: {
		type: Date,
		required: true
	},

	// Array of Students applied
	//! Populate with details of students
	//? Lookup how to post references
	studentsApplied: [{
		type: Schema.Types.ObjectId,
		ref: "Student"
	}]
});

const jobModel = mongoose.model("JobOffer", jobPostingSchema);
// Collection named JobOffer[s]

module.exports = jobModel;

//TODO: Connect this model with the announcement model to create a model
//TODO: everytime a job is posted.