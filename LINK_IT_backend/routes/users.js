const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

// @route GET /api/users/:id
// @desc  Get user by ID with their posts
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });

    res.json({ user, posts });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
