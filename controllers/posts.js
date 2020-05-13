const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  try {
    const retrievedPosts = await Post.find();
    res.json(retrievedPosts);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
