const express = require('express');// imports the Express Framework, which is used to create a web server and handle routes in Node.js applications.
const colors = require('colors')// imports colors package, which allows you to style console text e.g add colors to logs
const dotenv = require('dotenv').config();// loads environment variables from a .env file into process.env. This is used to securely manage sensitive configuration data, like API keys or database connection strings.
const {errorHandler} = require('./middleware/errorMiddleware')// imports a custome error-handling middleware module. 'errorHandler' is destructured from the module export, meaning its a specific function provided by that file.
const connectDB = require('./config/db')// imports the function or configuration for connecting to a database
const port = process.env.PORT || 5000;// fetches the port number from the environment variables. If the 'PORT' variable is not set, the server will default to port 5000.

connectDB()// is a function call to establish a connection to the database(usually MongoDB)

const app = express();// creates an instance of an Express application. 'app' is the variable used to configure and define routes, middleware, and server behavior.

app.use(express.json()) //our raw json middleware, parses incoming JSON request bodies and makes the data available under 'req.body'
app.use(express.urlencoded({extended : false}))// 'express.urlencoded({ extended: false })' parses incoming form data (URL-encoded data).'{ extended: false }' means it does not support nested objects; data is parsed as a flat object.

app.use('/api/goals', require('./routes/goalRoutes'))// '/api/goals' defines a base route for handling "goals" related API endpoints. 'require('./routes/goalRoutes')' imports a router module that defines sub-routes and their handlers. 
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler)// Adds the custom errorHandler middleware to the app. This middleware intercepts and handles errors throughout the application.

app.listen(port, () => console.log(`Server started on port ${port}`));// 'app.listen(port)' starts the server and listens for incoming requests on the defined port. 'console.log' outputs a message to the console, confirming the server has started.
