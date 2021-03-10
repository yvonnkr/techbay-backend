const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name: name || email.split("@")[0], picture },
      { new: true }
    );

    if (user) {
      // console.log("USER UPDATED", user);
      res.json(user);
    } else {
      const newUser = await new User({
        email,
        name: name || email.split("@")[0],
        picture,
      }).save();

      // console.log("USER CREATED", newUser);
      res.json(newUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || "server error" });
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      res.status(404).json({ message: "user not found" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || "server error" });
  }
};
