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

userRouter.post('/add', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created successfully",
        createdUser: {
            email: result.email,
            _id: result._id
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
  });
});

// This section will help you add a user
userRouter.post('/update', upload.single('avatar'), (req, res, next) => {
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

// This section will help you get a user by id
userRouter.get('/getByID/:id', async (req, res) => {
  const {id}  = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: 'No such user'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({message: 'No such user'})
  }

  res.status(200).json(user)
})

userRouter.get('/getByEmail/:email', async (req, res) => {
  const {email}  = req.params

  const user = await User.findOne({email})

  if (!user) {
    return res.status(404).json({message: 'No such user'})
  }

  return res.status(200).json(user)
})

// This section will help you get a user by username
userRouter.get('/find/username', async (req, res) => {
  const username = req.body.username
  const regex = new RegExp(username, 'i');

  const user = await User.find(
    {
        "$or":[
            {username: {$regex: regex}}
        ]
    })

  if (user === '') {
    return res.status(404).json({error: 'No such user'})
  }

  res.status(200).json(user)
})


module.exports = userRouter;