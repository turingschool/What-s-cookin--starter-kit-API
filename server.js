const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const users = require('./data/users');
const ingredients = require('./data/ingredients');
const recipes = require('./data/recipes');


app.locals = {
  title: 'FitLit-starter-kit API',
  users,
  ingredients,
  recipes,
  
}

app.use(cors());
app.use(express.json());

app.get('/api/v1/users', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.get('/api/v1/ingredients', (req, res) => {
  res.status(200).json(app.locals.ingredients);
});

app.get('/api/v1/recipes', (req, res) => {
  res.status(200).json(app.locals.recipes);
});





app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});
