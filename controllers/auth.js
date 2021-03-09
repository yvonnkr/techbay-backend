const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  //test -schema
  const users = await User.find();
  res.json({ users });
};
