import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

// Cases Resource

// New

app.get('/cases/new', (req, res) => {
  res.render('cases-new', {});
});

app.listen(3000);
