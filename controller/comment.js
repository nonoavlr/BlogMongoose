const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');

router.use('/', async (req, res) => {
    try{
        const posts = Blog.post

        return res.send({posts})
    }
    catch(err){
        res.send({ error : err})
    }
})

module.exports = router;