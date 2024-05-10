const express=require('express')
const {
  getMovies,
  insertMovies,
} = require("../controllers/movies.controllers");

const router = express.Router();

router.get("/movies", getMovies)
insertMovies()
    .then((docs)=>console.log(docs))
    .catch((err)=>console.log(err));

module.exports=router;