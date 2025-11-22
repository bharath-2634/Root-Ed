const express = require('express');
const { AddPosts , getAllPosts , getPostById, deletePost , updatePost} = require('../../controllers/posts/posts-controller.js');

const router = express.Router();

router.post("/add-post",AddPosts);
router.get("/get-all-posts",getAllPosts);
router.get("/get-post/:id",getPostById);
router.delete("/delete-post/:id",deletePost);
router.put("/edit-post/:id",updatePost);

module.exports = router;


