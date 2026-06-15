const express = require("express");
const router = express.Router();

router.post("/secret-check", (req, res) => {
  const { code } = req.body;

  const SECRET_CODE = process.env.SECRET_CODE;

  if (code === SECRET_CODE) {
    return res.json({ success: true });
  }

  return res.json({ success: false });
});

module.exports = router;