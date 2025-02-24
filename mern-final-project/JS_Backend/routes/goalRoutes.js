const express = require('express')
const router = express.Router()
const { getGoals, setGoal, deleteGoal, updateGoal} = require('../controllers/goalController')//Importing my goal functions

const { protect } = require('../middleware/authMiddleware') //im adding the protect to my routes so i can protect them

router.get('/', protect, getGoals);//routing to my goal functions

router.post("/", protect, setGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

module.exports = router