const express = require("express");

const { authCheck, adminCheck } = require("../middlewares/auth");
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

const router = express.Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.get("/current-user", authCheck, currentUser);
router.get("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
