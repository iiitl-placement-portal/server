module.exports = {
    // test route
    // test: require("./test.router"),
  
    jobs: require("./jobs.router"),
  
    profile: require("../../controllers/profile.controller"),
  
    resetPassword: require("../../controllers/reset-password.controller"),
  
    updateContactNo: require("../../controllers/updateContactNumber.controller"),
  
    companies: require("./companies.router.js"),

    // Notification is handled by /profile
    // notification: require("../controllers/notification.controller")
  
    // TODO in actual app
    // dashboard: require("./dashboard.router")
  };