const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authRoute = require("./router/auth-router");
dotenv.config({ path: './config.env' });

app.use(express.json());
require('./db/conn');
app.use("/api/auth", authRoute);
const PORT=process.env.PORT;
app.listen(PORT, function (req, res) {
    console.log("server running on port 3000");
});
