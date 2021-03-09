const admin = require("../firebase/index");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  //   console.log(req.headers.authtoken); // token
  //   next();

  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    console.log("firebaseUser", firebaseUser);
    req.user = firebaseUser;

    next();
  } catch (error) {
    // console.log(error);
    res.status(401).json({
      error: "Invalid or expired token",
    });
  }
};
