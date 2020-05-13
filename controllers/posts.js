const Post = require("../models/Post");

//This one gets back all the posts
exports.getPosts = async (req, res) => {
  try {
    const retrievedPosts = await Post.find();
    res.json(retrievedPosts);
  } catch (err) {
    res.json({ message: err });
  }
};

//Get a specific Post
exports.getPostById = async (req, res) => {
  const param = req.params.id;
  try {
    const retrievedPostById = await Post.findById(param);
    res.json(retrievedPostById);
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

exports.deleteById = async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
