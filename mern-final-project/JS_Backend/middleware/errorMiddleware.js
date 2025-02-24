const errorHandler = (err, req, res, next) => {
  //(err, req, res, next): this is an Express error-handling middleware function
  const statusCode = res.statusCode ? res.statusCode : 500; //checks if the response already has astatus code set, if res.statusCode is set, it uses that; otherwise it defaults to 500(internal Server Error)

  res.status(statusCode); //Sets the HTTP status code of the response to statusCode.

  res.json({ // Sends a JSON response to the client containing the error details
    message: err.message, // Includes the error message in the response
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // If the app is in production mode (NODE_ENV === 'production'), it does not include the error stack trace(for security reasons).
  });                                                                // If in development mode, it includes the stack trace(err.stack) to help debug the error.
}

module.exports = { // Exports the errorHandler function to make it available for use in other Files.
    errorHandler   // Exports the function in an object (ES6 shorthand syntax).
}