require("dotenv").config({ path: "./config.env" });
const mongoose = require('mongoose')

module.exports = {
  connectToServer: function () {
    // connect to a database
    mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
      console.log('Successfully connected to MongoDB.')
})
    .catch((error) => {
      console.log(error)
    })
  }
}