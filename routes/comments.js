const express = require("express");
const fakeComments = require("../data/comments");

const router = express.Router({ mergeParams: true });

// Get a list of comments
router.get("/", (req, res) => {
  const postId = Number(req.params.postId);
  const foundComments = fakeComments.filter((com) => com.post_id === postId);

  res.json(foundComments);
});

module.exports = router;
