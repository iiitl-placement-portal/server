module.exports = {
    approvejob: require("./approveJob.controller"),
    rejectjob: require("./rejectJob.controller"),
    getpendingjob: require("./getPendingJob.controller"),
    queries: require("./getQueries.controller"),
    answerQuery: require("./answerQuery.controller"),
  };