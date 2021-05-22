const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    //year of passout
    passoutBatch: {
        type: String,
        required: true,
    },
    //branch
    program: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    // email to contact(generally personal Email)
    urEmail: {
        type: String,
    },
    password: {
        type: String,
        required : true
    },
    cgpa: {
        type: Number,
        required: true,
    },
    // address: {
    //     type: String,
    // },
    city: {
        type: String,
    },
    postCode: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    linkedlnURL: {
        type: String,
        required: true,
    },
    resumeUrl : {
        type : String
    },
    registeredCompany: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    }
});

// create student model
const studentModel = mongoose.model("Student", StudentSchema);
module.exports = studentModel;
