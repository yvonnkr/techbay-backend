const admin = require("../firebase/index");

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
      error: "Invalid or expired token",
    });
  }
};
