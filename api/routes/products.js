const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Handling GET requests of products" });
});
router.post("/", (req, res, next) => {
  res.status(200).json({ message: "Handling GET requests of products" });
});

module.exports = router;
