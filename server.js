require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const cors = require("cors");;
const category = require("./routes/category");

// Init app
const app = express();
const server = http.createServer(app);
// Connect database
require("./db/db");


// Middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));

app.use(cors({  
  origin: [ "http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}));


// Routes
app.use("/category", category);

// Connect port
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`App running on port ${port}`));
