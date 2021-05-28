const StudentModel=require("../database/models/student.model")

module.exports = async (req, res) => {
    const temp = await StudentModel.findById(req.user._id);
    
    temp.password=req.body.password;
    //console.log(temp);
    await StudentModel.findByIdAndUpdate(req.user._id,temp).then(
        console.log("Passoword Succesfully changed"),
    );
    res.status(200).send("Password Successfully changed!!")
}