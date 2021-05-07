const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../middlewares/passport");

module.exports = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) {
        console.log("Some error occoured in authentication.");
        return next(err);
      }
      if (!user) {
        console.log("User couldn't be found for authentication.");
        return new Error("User couldn't be found for authentication.");
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          console.log("User couldn't be logged in.");
          return next(error);
        }

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.SECRET, {
          expiresIn: 60,
        });

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
