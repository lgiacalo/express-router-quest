const express = require("express");
const fakeTags = require("../data/tags.json");
const fakePosts = require("../data/posts.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(fakeTags);
});

router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  if (!fakeTags.some((t) => t.id === tagId)) {
    return res.sendStatus(404);
  }
  const posts = fakePosts.filter((p) => p.tag_ids.includes(tagId));
  res.json(posts);
});

module.exports = router;
