const router = require("express").Router();
const jobs = require("../../controllers/jobs/index");

router.get("/all", jobs.all);
router.get("/:id", jobs.id);
router.get("/:id/students", jobs.students);

// router.post("/:id/apply", jobs.apply);
// router.get("/applied", jobs.applied);

module.exports = router;
