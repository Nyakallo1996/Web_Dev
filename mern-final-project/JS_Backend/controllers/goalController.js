//My goalCrontroller.js file found in my Contollers Folder is used to stop all of my CRUD function.

const asyncHandler = require('express-async-handler') //Getting my asyncHandler from my express-async-handler depandency

const Goal = require('../models/goalModel') // Importing my Schema
const User = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json(goals)
})

// @desc Post goals
// @route SET /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => { //async (req, res) : asynchronous arrow function
    if (!req.body.text) { //Checks if the text field is missing in the req.body
        res.status(400) //Sets the HTTP response status code to 400, indicating a bad request error
        throw new Error('Please add a text field')// throws an error with message "Please add a text field", the asyncHandler will catch this error and handle it appropriately
    }

    const goal = await Goal.create({ //const goal: declares a constant goal to store the result of the Goal.create method. the await keyword pauses excution until the Goal.create operation completes
        text: req.body.text, //Specifies the data to be saved. Here the text field of the new goal is set to the text value from the request body
        user: req.user.id,
    })

    res.status(200).json(goal) //Sets the HTTP response status code to 200, indicating success 
                               // .json(goal) sends the newly created goal object back to the client in JSON format
})

// @desc Update goal
// @route Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {  

    const goal = await Goal.findById(req.params.id)

    

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    

    //Check if user exists
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })


    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400)  
      throw new Error("Goal not found");
    }

   

    //Check if user exists
    if (!req.user) {
      res.status(401);
      throw new Error("User not found");
    }

    //Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    await goal.deleteOne()



    res.status(200).json({ id: req.params.id })
})

module.exports = { //exporting my functions
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}