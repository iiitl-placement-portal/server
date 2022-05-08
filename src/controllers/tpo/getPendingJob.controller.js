const PendingJobModel= require("../../database/models/pendingjob.model")

const getNewJob= async (req,res,next)=>{
    try{
        const allJobs= await PendingJobModel.find({});
        res.send(allJobs,status=200);
    }
    catch(e){
        next(e);
    }
}

module.exports = getNewJob;