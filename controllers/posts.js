const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = (app) => {

    //Display all posts in the Homepage
    app.get('/', (req, res) => {
        const currentUser = req.user;
      
        Post.find({}).lean().populate('author')
          .then((posts) => res.render('posts-index', { posts, currentUser }))
          .catch((err) => {
            console.log(err.message);
          });
    });

    // Look up a specific post 
    app.get('/post-show/:id', (req, res) => {
        // const currentUser = req.user;
        // Post.findById(req.params.id).lean().populate({ path:'comments', populate: { path: 'author' } }).populate('author')
        // .then((post) => res.render('posts-show', { post, currentUser }))
        // .catch((err) => {
        //     console.log(err.message);
        // });

        const currentUser = req.user;
        Post.findById(req.params.id).populate('comments').lean()
        .then((post) => res.render('posts-show', { post, currentUser }))
        .catch((err) => {
          console.log(err.message);
        });
    });


    // CREATE
    app.post('/posts/new', (req, res) => {
        if (req.user) {
          const userId = req.user._id;
          const post = new Post(req.body);
          post.author = userId;
    
          post
            .save()
            .then(() => User.findById(userId))
            .then((user) => {
              user.posts.unshift(post);
              user.save();
              // REDIRECT TO THE NEW POST
              return res.redirect(`/post-show/${post._id}`);
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          return res.send(401); // UNAUTHORIZED
        }
    });
    
    // View Subreddit
    app.get('/n/:subreddit', (req, res) => {
        // const currentUser = req.user;
        // const { subreddit } = req.params;
        // Post.find({ subreddit }).lean().populate('author')
        //     .then((posts) => res.render('posts-index', { posts, currentUser }))
        //     .catch((err) => {
        //     console.log(err);
        // });

        const { user } = req;
        Post.find({ subreddit: req.params.subreddit }).lean()
        .then((posts) => res.render('posts-index', { posts, user }))
        .catch((err) => {
          console.log(err);
        });
    });
};


