const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/productlist", async (req, res) => {
  try {
    var pageOptions = {
      offset: parseInt(req.query.offset) || 0,
      limit: parseInt(req.query.limit) || 20
    };
    var mysort = { name: 1 };
    const product = await Product.find()
      .sort(mysort)
      .skip(pageOptions.offset)
      .limit(pageOptions.limit);
    if (!product) {
      return res.status(400).json({ msg: "Product Information Not Available" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/product", async (req, res) => {
  try {
    var pageOptions = {
      offset: parseInt(req.query.offset) || 0,
      limit: parseInt(req.query.limit) || 20,
      type: req.query.type
    };
    var mysort = { name: 1 };
    const product = await Product.find({ type: pageOptions.type })
      .sort(mysort)
      .skip(pageOptions.offset)
      .limit(pageOptions.limit);
    if (product == []) {
      return res.status(400).json({ msg: "Product Information Not Available" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
