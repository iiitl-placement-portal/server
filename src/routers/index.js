module.exports = {
  // test route
  test: require("./test.router"),

  login: require("../controllers/login.controller"),

  profile: require("../controllers/profile.controller"),

  // TODO in actual app
  // dashboard: require("./dashboard.router")
  // jobs-applied: require("./jobs-applied.router")
  // all-jobs: require("./all-jobs.router")
};
