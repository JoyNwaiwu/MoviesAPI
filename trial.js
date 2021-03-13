// In this task, you would build a simple movie API and host it publicly. The API should provide endpoints to:
// 1. Get a list of all movies
// 2. Get movies by year, genre, title, type
// 3. Add new movies
// 4. Update existing movies
// 5. Delete Movies

// A movie has the following attributes: Title, Year, Genre, Type (movie or series), Runtime (e.g 1:30 mins, 58mins), Actors (e.g Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evan), Language, Country

// Comment the API link and write a little documentation on how to use it below, when done.

// let movies = [
//   {
//     id: 1,
//     title: "Star girl",
//     year: "2012",
//     type: "Movie",
//     genre: "romance"
//   },
// ];

// exports.movies = movies;


/*
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!')
});

app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

app.post("/new_movie", (req, res) => {
  fs.writeFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  });
  
  */