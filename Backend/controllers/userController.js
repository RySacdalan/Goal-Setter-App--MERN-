//Description: Register a new user
//Route: POST /api/users
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

//Description: Authenticate/login a new user
//Route: POST /api/users/login
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

//Description: Get user data
//Route: GET /api/users/login/me
const getMe = (req, res) => {
  res.json({ message: "Get user data and display" });
};

module.exports = { registerUser, loginUser, getMe };
