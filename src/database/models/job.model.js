const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CompanyModel = require("./company.model");

const jobPostingSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },

  // Details of the comapany the job is posted by
  // TODO -: Remove company
  company: {
    type: Schema.Types.ObjectId,
    ref: "Companie",
  },

  companyName: {
    type: String,
    required: true,
  },

  aboutcompany: {
    type: String,
  },

  idealCandidate: {
    type: String,
  },

  expectedSkills: {
    type: String,
  },

  // key responsibilities
  yourRole: {
    type: String,
  },

  // Description of the job
  jobDescription: {
    type: String,
  },

  // Intern/Full
  recruitmentType: {
    type: String,
  },

  duration: {
    type: String,
  },

  //location of job
  postingLocation: {
    type: String,
  },

  active: {
    type: String,
    default: true,
  },

  //Student Eligibility
  // TODO -: remove eligibility as everything is checked separately
  eligibility: [
    {
      type: Number,
    },
  ],

  onlyForFemales: {
    type: Boolean,
  },

  minCgpa: {
    type: String, //TODO: convert float
  },

  maxBacklogsAllowed: {
    type: String,
  },

  // passout in year 2023, 2024, 2025..
  batchesAllowed: [
    {
      type: Number,
    },
  ],

  //Package
  package: {
    type: Number,
  },

  packageBreakup: {
    type: String,
  },

  evaluationPattern: {
    type: string,
  },

  // registration deadline
  deadlineDate: {
    type: Date,
    required: true,
  },

  jobId: {
    type: String,
    required: true,
    unique: true,
  },

  // Array of Students applied
  //! Populate with details of students
  //? Lookup how to post references
  studentsApplied: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  // Array of students accepted for job
  studentsAccepted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  easyApply: {
    type: Boolean,
    default: false,
  },
});

const jobModel = mongoose.model("JobOffer", jobPostingSchema);
// Collection named JobOffer[s]

module.exports = jobModel;
