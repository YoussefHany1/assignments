const express = require("express");
const PageController = require("../controllers/page.controller");
const router = express.Router();

router.get("/post", PageController.post);

module.exports = router;
