const express = require("express");
const router = express.Router();
const Images = require("../models/ImgModel");

router.post("/upload/img", async (req, res) => {
  try {
    let { name, path } = req.body;
    const img = await Images.create({
      img: [{ name, path }],
    });
    return res.status(201).send({
      success: true,
      url: img,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/all/images", async (req, res) => {
  try {
    const imgs = await Images.find();
    return res.status(200).send({
      success: true,
      images: imgs,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/delete/img/:id", async (req, res) => {
  try {
    let imgToDel = await Images.findById(req.params.id);
    if (!imgToDel) {
      return res.status(404).send({
        success: false,
        message: `Image with ID: ${
          req.params.id.slice(0, 3) +
          "..." +
          req.params.id.slice(req.params.id.length - 3)
        } not found`,
      });
    }
    imgToDel = await Images.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: `Image with ID: ${
        req.params.id.slice(0, 3) +
        "..." +
        req.params.id.slice(req.params.id.length - 3)
      } deleted successfully`,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
