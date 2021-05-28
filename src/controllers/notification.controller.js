const StudentModel = require("../database/models/student.model");

module.exports = async (req, res) => {
    // console.log(req);
    const student = await StudentModel.findById(req.user._id).populate(
        "notification"
    );
    //console.log(student.notification);
    res.status(200).send(student.notification);
};
