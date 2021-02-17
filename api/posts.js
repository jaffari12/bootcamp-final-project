const express = require("express");
const protect = require("../middleware/auth");
const {
  getPosts,
  getPost,
  submitNewPost,
  editPost,
  deletePost,
} = require("../controllers/posts");

const api = express.Router();

api.route("/").get(getPosts).post(protect, submitNewPost);

api
  .route("/:id")
  .get(getPost)

  .patch(editPost)
  .delete(deletePost);

module.exports = api;
