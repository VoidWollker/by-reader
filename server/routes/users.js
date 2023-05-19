const { Router } = require("express");
const User = require('../models/userModel')
const mongoose = require('mongoose')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

module.exports = upload;
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRouter = Router();

// This section will help you add a user
userRouter.post('/add', upload.single('avatar'), (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    avatar: req.file.path 
  });
  user
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created successfully",
        createdUser: {
            name: result.name,
            lastname: result.lastname,
            username: result.username,
            email: result.email,
            _id: result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});

module.exports = userRouter;