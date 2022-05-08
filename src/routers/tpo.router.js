const router = require("express").Router();
const tpo = require("../controllers/tpo/index");
const uploadJsonData=require("../utils/uploadJsonData.js");
const deleteAllData = require("../utils/deleteAllCollection.js");

router.get("/pendingjob",tpo.getpendingjob);
router.delete("/approvejob/:id",tpo.approvejob);
router.post("/uploadjsondata",uploadJsonData);
router.post("/deleteAllData",deleteAllData);
router.delete("/rejectjob/:id",tpo.rejectjob);
router.get("/queries",tpo.queries);
router.post("/answer-query/:id",tpo.answerQuery);

module.exports = router;
