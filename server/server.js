require('dotenv').config();

const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRouter = require('./routes/auth/auth');
const houseRouter = require('./routes/house/house');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/houses', houseRouter);


app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
