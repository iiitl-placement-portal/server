const router = require("express").Router();
const jobs = require("../controllers/jobs/index");

router.get("/all", jobs.all);
router.get("/applied", jobs.applied);
router.get("/:id", jobs.id);
router.get("/:id/apply", jobs.apply);

module.exports = router;
