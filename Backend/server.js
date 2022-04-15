const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

//connection to mongoDB
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//error handler
app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Port started on Port: ${port}`));
