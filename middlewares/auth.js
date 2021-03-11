const admin = require("../firebase/index");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  //   console.log(req.headers); next()
  //   console.log(req.headers.authtoken); next()

  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    req.user = firebaseUser;

    next();
  } catch (error) {
    res.status(401).json({
      error: "Access denied. Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  try {
    const adminUser = await User.findOne({ email });

    if (adminUser.role !== "admin") {
      res.status(403).json({
        error: "Admin resource. Access denied.",
      });
    }

    next();
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
