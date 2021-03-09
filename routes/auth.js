const express = require("express");
const router = express.Router();

router.get("/create-or-update-user", (req, res) => {
  res.json({ data: "auth create-or-update-user route" });
});

module.exports = router;
