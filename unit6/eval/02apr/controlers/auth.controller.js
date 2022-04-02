const express = require("express");
const User = require("../schema/user.schema");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json("User already exists, try with a diferent email adddres");
    }
    user = await User.create(req.body);

    let token = new Date();
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("User email or password is incorrect");
    }
    const matching = () => {
      if (user.password === req.body.password) {
        return true;
      }
    };
    if (!matching()) {
      return res.status(400).json("User email or password is incorrect");
    }
    let token = new Date();
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

module.exports = router;
