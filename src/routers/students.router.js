const router = require("express").Router();
const students = require("../controllers/students/");

router.get("/all", students.all);
router.get("/:id", students.id);

module.exports = router;
