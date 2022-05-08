const PendingJobModel= require("../../database/models/pendingjob.model")

const getNewJob= async (req,res,next)=>{
    try{
        const job = await PendingJobModel.find({ req.params.id });
        res.status(200);
        res.send(allJobs);
    }
    catch(e){
        next(e);
    }
}

module.exports = getNewJob;