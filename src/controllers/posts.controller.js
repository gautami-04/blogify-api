// src/controllers/posts.controller.js

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch post",
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
