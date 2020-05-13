const express = require("express");
const router = express.Router();

const PostController = require("../controllers/posts");

router.get("/:id", PostController.getPostById);

router.delete("/:id", PostController.deleteById);

router.get("", PostController.getPosts);

router.post("/", PostController.createPost);

module.exports = router;
