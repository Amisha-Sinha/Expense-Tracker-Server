// contains the business logic for the app.

const express= require("express");
const dotenv= require("dotenv");
const dbConnect= require("./config/dbConnect");
const {errorHandler, notFound} = require("./middlewares/errorMiddleware");
const userRoute= require("./routes/users/usersRoute");

const app= express();
//env
dotenv.config();

//database connection
dbConnect();

app.use(express.json());

// Routes
app.use("/api/users", userRoute); 

// Errors
app.use(notFound);
app.use(errorHandler);

module.exports= app;

 