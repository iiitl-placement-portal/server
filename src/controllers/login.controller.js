const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../middlewares/passport");

module.exports = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) {
        console.log("Some error occoured in authentication.");
        throw new Error(err);
      }
      if (!user) {
        // console.log("User couldn't be found for authentication.");
        throw new Error("User couldn't be found for authentication.");
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          console.log("User couldn't be logged in.");
          throw new Error(error);
        }

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.SECRET, {
          expiresIn: "1h",
        });

        return res.json({ token });
      });
    } catch (error) {
      return next(req, res, error);
    }
  })(req, res, next);
};
