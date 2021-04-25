const router = require("express").Router();
const testRoutesMw = require("../middlewares/test");

router.get("/", (req, res) => {
  res.send("nothing to send here too.");
});
router.get("/view", testRoutesMw.viewMw);

// TODO task for now
// router.post("/create", testRoutesMw.createMw);
// router.delete("/delete", testRoutesMw.deleteMw);


module.exports = router;
