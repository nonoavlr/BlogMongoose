const express = require('express');
const router = express.Router();
const Posts = require('../model/blog');

router.get('/', async (req, res) => {
    try{

        const posts = await Posts.find()

        return res.send({posts})
    }
    catch(err){
        res.send({ error : err})
    }
});

router.post('/create', async (req, res) => {
    try{
        const post = req.body
        console.log(req.body)
        await Posts.create(post)

        const posts = await Posts.find();

        return res.send({posts})
    }
    catch(err){
        res.send({ error : err})
    }
});

module.exports = router;