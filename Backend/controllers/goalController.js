//Description: Get all goals
//Route: GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals successfully" });
};

//Description: Set a single goal
//Route: POST /api/goals
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goals successfully" });
};

//Description: Edit/Updating a single goal
//Route: PUT /api/goals/:id
const updateGoal = (req, res) => {
  res
    .status(200)
    .json({ message: `Update goals successfully for id: ${req.params.id}` });
};

//Description: Delete a single goal
//Route: DELETE /api/goals/:id
const deleteGoal = (req, res) => {
  res
    .status(200)
    .json({ message: `Goal for id: ${req.params.id} successfully deleted!` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
