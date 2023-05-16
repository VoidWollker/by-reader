const { Router } = require("express");
const User = require('../models/userModel')
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRouter = Router();
  
// This section will help you add a book
userRouter.post('/add', async (req, res) => {
  const {email, password} = req.body
  
  try {
    const user = await User.create({email, password})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

module.exports = userRouter;