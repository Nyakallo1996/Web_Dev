const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization && //Checks if the Authorization header exists in the request and whether it starts with a "Bearer"(a common convention for passing tokens)
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];//Splits the Authorization header string (Bearer <token>) to extract the token part

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);//Uses "jwt.verify()" to decode and validate the token using a secret key
                                                                //(process.env.JWT_SECRET). if invalid, an error is thrown
      //Get user from the token
      req.user = await User.findById(decoded.id).select("-password");//finds the user in the database using the ID from the decoded token.
                                                                     // select("-password") ensures the password is excluded from the data attached to the req object for security
      next();// if no errors occur, calls the next() function to proceed to the next middleware or route handler
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
