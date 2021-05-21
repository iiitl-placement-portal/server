const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    //Company
    companyName: {
        type: String,
        required: true,
    },
    companyWebsite: {
        type: String,
    },
//     industrySector: {
//         type: String,
//     },
    aboutCompany: {
        type: String,
    },

    //Job Opening
    jobProfile: {
        type: String,
        required: true,
    },
    passoutBatch: {
        type: String,   //todo convert year
        required: true
    },

    //whether intern or full-time placement
    recruitmentType: {
        type: String
    },
    duration: {
        type: String
    },
    postingLocation: {
        type: String
    },
    jobDescription: {
        type: String
    },
    active:{
        type: Boolean,
        default: true
    },

    //Student Eligibility
    eligibility : {
        type : Object
    },
    minCgpa : {
        type : String   //todo convert float
    },
        //10th percent
//     minMetricPercent : {
//         type : String
//     },
//         //12th percent
//     minSeniorpercent : {
//         type : String
//     },
    
    //Package
    package : {
        type: String
    },

    // registration deadline
    deadlineDate : {
        type : Date,
        required : true
    },

    //No. of students applied
    studentApplied:{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
});

// create company model
const companyModel = mongoose.model("Companie", CompanySchema);
// git commit -m "Change collection name from 'Company' to 'Companie'" -m "mongoose capitalises the schema name.
// Hence 'Companie' will become 'Companies' while creating the collection"

module.exports = companyModel;
