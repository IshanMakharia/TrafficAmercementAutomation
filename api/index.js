const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const userRoute = require("./routes/users");
const fineRoute = require("./routes/fines")


dotenv.config();

mongoose.connect(process.env.MONGO_URL, ()=>{
  console.log("Connected to MongoDB")
});


// Use the body-parser middleware to parse JSON data
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/fine", fineRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running");
})



