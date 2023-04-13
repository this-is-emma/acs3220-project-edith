const express =  require('express');
const { engine } =  require('express-handlebars');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./controllers/posts')(app);
require('./data/reddit-db');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//ROUTES 

//* Home
app.get('/', (req, res) => {
  res.render('home');
});


//* New post (get)
app.get('/posts/new', (req, res) => {
  res.render('posts-new', {});
});

app.listen(3000);

module.exports = app;
