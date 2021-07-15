const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Handling GET requests of products" });
});
router.post("/", (req, res, next) => {
  res.status(200).json({ message: "Handling POST requests of products" });
});
router.get("/:product_id", (req, res, next) => {
  const id = req.params.product_id;
  if (id === "Special") {
    res.status(200).json({
      message: "You discovered a special id.",
      id: id,
    });
  } else {
    res.status(200).json({ message: "You passed an id." });
  }
});

router.patch("/:product_id", (req, res, next) => {
  res.status(200).json({ message: "Handling Patch requests of products" });
});
router.delete("/:product_id", (req, res, next) => {
  res.status(200).json({ message: "Handling Delete requests of products" });
});

module.exports = router;
