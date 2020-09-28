const express = require('express');
const router = express.Router();
const post = require('./controller/post');
const comment = require('./controller/comment');


router.use('/posts', post);
router.use('/comments', comment);

module.exports = router;