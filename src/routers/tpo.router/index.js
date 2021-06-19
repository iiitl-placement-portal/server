module.exports = {
    // test route
    // test: require("./test.router"),
  
    jobs: require("./jobs.router"),

    students: require("./students.router.js"),
  
    profile: require("../../controllers/profile.controller"),

    companies: require("./companies.router")
  
    // resetPassword: require("../../controllers/reset-password.controller"),
  
    // updateContactNo: require("../../controllers/updateContactNumber.controller"),
  
    // Notification is handled by /profile
    // notification: require("../controllers/notification.controller")
  
    // TODO in actual app
    // dashboard: require("./dashboard.router")
  };