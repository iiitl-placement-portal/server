const PendingJobModel= require("../../database/models/pendingjob.model")

const rejectNewJob= async (req,res,next)=>{
    try{
        await PendingJobModel.findByIdAndDelete(req.params.id);
        res.send("Deleted Job!!");
    }
    catch(e){
        next(e);
    }
}

module.exports = rejectNewJob;