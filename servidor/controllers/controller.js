const { response } = require('express');
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

exports.getMostWatchedMovies =  async (req,res) => { 
  await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKey)
  .then(response => response.json())
  .then(json => res.send(json.results));
  }

  exports.getMoviesInTheatres = async (req, res) => {
    await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" +apiKey +"&page=" + req.params.page)
    .then(response => response.json())
    .then(json => res.send(json.results));
  }

  exports.getMostPopularMovies = async (req, res) => {
    await fetch("https://api.themoviedb.org/3/movie/popular?api_key="+apiKey+"&page=" + req.params.page)
    .then(response => response.json())
    .then(json => res.send(json.results));
  } 

  exports.getMovieDetails = async (req, res) => {
    await fetch("https://api.themoviedb.org/3/movie/" + req.params.id + "?api_key=" +apiKey)
    .then(response => response.json())
    .then(json => res.send(json));
  }

  exports.obtenerBaseUrl =  async (req,res) => {
    await fetch("https://api.themoviedb.org/3/configuration?api_key=" + apiKey)
    .then(response => response.json())
    .then(json => res.send({"base_url":json.images.base_url}));
    }