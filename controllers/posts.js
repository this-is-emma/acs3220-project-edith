const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const Post = require('../models/post');

module.exports = (app) => {

    //Display all posts in the Homepage
    app.get('/', (req, res) => {
        Post.find({}).lean()
        .then((posts) => res.render('posts-index', { posts }))
        .catch((err) => {
            console.log(err.message);
        })
    })

    // Look up a specific post 
    app.get('/post-show/:id', (req, res) => {
        Post.findById(req.params.id).lean().populate('comments')
        .then((post) => res.render('posts-show', { post }))
        .catch((err) => {
            console.log(err.message);
        });
    });

    // CREATE
    app.post('/posts/new', (req, res) => {
        // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Post(req.body);
        
        // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
        post.save(() => res.redirect('/'));
    });
    
    // View Subreddit
    app.get('/n/:subreddit', (req, res) => {
        Post.find({ subreddit: req.params.subreddit }).lean()
            .then((posts) => res.render('posts-index', { posts }))
            .catch((err) => {
            console.log(err);
        });
    });
};


