module.exports = {
  // test route
  test: require("./test.router"),

  login: require("../controllers/login.controller"),

  jobsAll: require("../controllers/jobsAll.controller"),

  jobEach: require("../controllers/jobsEach.controller"),
  
  jobsApplied: require("../controllers/jobsApplied.controller"),

  profile: require("../controllers/profile.controller")
  
  // TODO in actual app
  // dashboard: require("./dashboard.router")
};
