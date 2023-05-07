require("dotenv").config({ path: "./config.env" });

const express = require('express')
const cors = require('cors');
const routes = require('./routes/products')

const app = express()

app.use(cors());
app.use(express.json())

app.use(routes);

const database = require("./db/conn");

app.listen(process.env.PORT, () => {
  // perform a database connection when server starts
  database.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log('Server is successfully running on port:', process.env.PORT);
});
