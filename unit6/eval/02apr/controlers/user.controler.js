const express = require("express");
const User = require("../schema/user.schema");

const router = express.Router();

router.get("/", async (req, res) => {
        const user = await User.find({}).select("-password");
        res.status(200).send(user);
});
router.get("/:id", async (req, res) => {});
router.post("/", async (req, res) => {});
router.patch("/:id", async (req, res) => {});
router.delete("/:id", async (req, res) => {});

module.exports = router