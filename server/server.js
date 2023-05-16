require("dotenv").config({ path: "./config.env" });

const express = require('express')
const cors = require('cors');
const routes = require('./routes/record')
const userRoutes = require('./routes/users')
const database = require('./db/conn');

const app = express()

app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/book', routes)
app.use('/user', userRoutes)

app.listen(process.env.PORT, () => {
  // perform a database connection when server starts
  database.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log('Server is successfully running on port:', process.env.PORT);
});
