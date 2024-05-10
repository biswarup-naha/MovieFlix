const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnection");
const movieRoutes = require("./routes/movies.routes");

//Utils & middlewares
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

//DB connection
dbConnect();

//Routes
app.use("/api", movieRoutes);

//server execution
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
