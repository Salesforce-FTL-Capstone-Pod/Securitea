const express = require("express");
const User = require("../models/user");
const router = express.Router();
const security = require("../middleware/security");

router.get(
  "/get_progress",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      const userId = res.locals.user.id;
      const progress = await User.getProgress(userId);
      return res.status(200).json({ progress: progress });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
