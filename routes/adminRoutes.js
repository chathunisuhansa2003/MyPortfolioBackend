const express = require("express");
const { loginAdmin, changePassword } = require("../controllers/adminController");

const router = express.Router();

router.post("/login", loginAdmin);
router.put("/change-password", changePassword);

module.exports = router;