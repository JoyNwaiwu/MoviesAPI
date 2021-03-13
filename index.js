/*
Preliminaries
- npm init
- npm install --save express
- added "type": "module" to package.json to enable imports
- npm install --save-dev nodemon (added the start script in place of test script in package.json)
- Run (npm start) once and the application runs automatically whenever it's saved
*/

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import express from 'express';        
import bodyParser from 'body-parser';         // allows incoming post request bodies

let movies = require('./movies.json');

const app = express();                        // Initializing express
const port = 2000;                            // Creating the port, can be any number

app.use(bodyParser.json());                   // Use json data for the app

// API Homepage
app.get('/', (req, res) => res.send('Welcome to the movies API 😁... '));

// Get a list of all the movies
app.get('/movies', (req, res) => { 
  res.send(movies)
});


// Get movies by title
app.get('/movies/:title', (req, res) => {
  const {title}  = req.params;
  const foundMovie = movies.find((movie) => movie.title == title);
  res.send(foundMovie);
});


// Add a new movie (Using Postman)
app.post('/movies', (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.send(`New movie titled: ${movie.title} has been added.`)
});


// Delete movies by title
app.delete('/movies/:title', (req, res) => {
  const {title} = req.params;
  movies = movies.filter((movie) => movie.title !== title)
  res.send(`${title} movie was deleted.`)
});


app.patch('/movies/:title', (req, res) => {
  const {title} = req.params;
  const {year, type, genre} = req.body;  
  const movie = movies.find((movie) => movie.title == title);

  if (year) movie.year = year;
  if (type) movie.type = type;
  if (genre) movie.genre = genre;
  
  res.send(`Movie with ${title} updated`);
});
 
// Listen for incoming requests with the call back function
app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`));

