const router = require("express").Router();
const companies = require("../controllers/companies/index");

router.get("/all", companies.all);
router.get("/:id", companies.id);
router.get("/:id/jobs", companies.jobs);
router.get("/:id/students", companies.students);

module.exports = router;
