const Post = require("../models/Post");

exports.message = (req, res) => {
  res.send("We are on posts");
};

exports.specific = (req, res) => {
  res.send("We are on specific");
};

exports.test = (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
};
