module.exports = {
  // test route
  // test: require("./test.router"),

  login: require("../controllers/login.controller"),

  jobs: require("./jobs.router"),

  profile: require("../controllers/profile.controller")
  
  // TODO in actual app
  // dashboard: require("./dashboard.router")
};
