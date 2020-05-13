const express = require("express");
const router = express.Router();

const PostController = require("../controllers/posts");

router.get("/", PostController.message);

router.get("/specific", PostController.specific);

module.exports = router;
